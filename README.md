# Daniel Huang Website

Personal website built as a lightweight static site and ready for GitHub Pages.

## Profile image

Place your hero photo at:

`/Users/xin/Documents/Documents/College/My_website/assets/images/daniel-horse.jpg`

You can rename it, but then update the `src` in `index.html`.

## Run locally

From this folder, open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8080
```

Then visit: <http://localhost:8080>

## Deploy to GitHub Pages (`DevXinHuang.github.io`)

```bash
cd /Users/xin/Documents/Documents/College/My_website
git init
git branch -M master
git remote add origin https://github.com/DevXinHuang/DevXinHuang.github.io.git
git add .
git commit -m "Build new personal portfolio site"
git push -u origin master
```

After push, your site should be live at:
- <https://devxinhuang.github.io>

If you use a custom domain later, add a `CNAME` file with your domain.
