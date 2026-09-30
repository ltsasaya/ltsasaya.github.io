"""Stage public assets only. Run: python3 build.py"""
from html.parser import HTMLParser
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "dist"


class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = {"index.html", "styles.css", "assets/favicon.svg"}

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag in {"img", "script"}:
            self.paths.add(values["src"])


assets = Assets()
assets.feed((ROOT / "index.html").read_text())
# Only prune files in this script's generated output directory.
if OUTPUT.is_symlink():
    raise RuntimeError("Refusing to write through a dist symlink")
for relative in assets.paths:
    source = ROOT / relative
    if not source.is_file() or not source.resolve().is_relative_to(ROOT):
        raise RuntimeError(f"Missing or invalid public asset: {relative}")
if OUTPUT.exists():
    shutil.rmtree(OUTPUT)
OUTPUT.mkdir()
for relative in sorted(assets.paths):
    destination = OUTPUT / relative
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(ROOT / relative, destination)
(OUTPUT / ".nojekyll").touch()
print(f"Built {len(assets.paths)} public files in {OUTPUT}")
