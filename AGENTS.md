# Project rules
- Keep podcast episode metadata in `src/data/podcasts.ts` and render it on a dedicated page; separating content from playback preserves episode ordering and audio mappings.
- Serve uploaded podcast recordings through Lovable Assets pointers rather than repository binaries to keep the application lightweight.