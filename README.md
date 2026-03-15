# WACE Methods Study Trainerd

A web-based study tool for WACE Year 12 Mathematics Methods students featuring intelligent spaced repetition, self-assessment, and progress tracking.

## For Students

1. Open the link your teacher gives you in Edge or Chrome
2. Enter your name and class code
3. Start studying!

Your progress is saved automatically.

## For the Teacher

### Updating Questions

1. Add/modify questions in the Teacher Project as normal
2. Run `python3 bundle_for_cloud.py` from the Teacher Project folder
3. Open **GitHub Desktop** — you'll see the changed files
4. Type a short message describing what changed (e.g., "Added 5 new integration questions")
5. Click **Commit to main**, then **Push origin**
6. Students get the update within ~2 minutes

### Updating the Schedule

Edit `data/schedule.json` directly — either locally or on github.com:

1. Go to your repository on github.com
2. Navigate to `data/schedule.json`
3. Click the pencil icon to edit
4. Make your changes
5. Click **Commit changes**

### Viewing Student Progress

Open `teacher.html` in your browser to see the class dashboard (coming soon).

## Technical Notes

- Hosted on GitHub Pages (free)
- Student progress stored in Firebase Firestore (free tier)
- Works offline after first load (via Service Worker — coming soon)
- No installation required — runs entirely in the browser
