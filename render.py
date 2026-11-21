"""Render frontpage.html to entry.png at 1024x1024 with Playwright + cached Chromium."""
from playwright.sync_api import sync_playwright

CHROME = "/home/hatch/.cache/ms-playwright/chromium_headless_shell-1148/chrome-linux/headless_shell"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME, args=["--no-sandbox", "--disable-gpu"])
    page = browser.new_page(viewport={"width": 1024, "height": 1024}, device_scale_factor=1)
    page.goto("file:///home/hatch/workspace/make-fun/news-image-20261120-r3/frontpage.html")
    page.wait_for_timeout(800)
    page.screenshot(path="/home/hatch/workspace/make-fun/news-image-20261120-r3/entry.png")
    browser.close()
print("rendered")
