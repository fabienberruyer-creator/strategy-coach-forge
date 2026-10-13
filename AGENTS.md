# Project rules
- Keep podcast episode metadata in `src/data/podcasts.ts` and render it on a dedicated page; separating content from playback preserves episode ordering and audio mappings.
- Serve uploaded podcast recordings through Lovable Assets pointers rather than repository binaries to keep the application lightweight.- Group podcast episodes by rubrique (Stratégie commerciale, Management) via the `rubriques` list and each episode's `rubrique` field in `src/data/podcasts.ts`; new categories need only data changes.
