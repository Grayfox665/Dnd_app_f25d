# Dnd_app_f25d Projekt

## Beskrivning: 

Min Projekt for slutuppgift till Apputveckling Kursen.
Denna Projekt ska vara en assistent för när man spelar Dungeons and Dragons. Det finns just för tillfället fyra sidor.
Home- Start sidan, här dyker det upp spells som man har bokmärkt från Spells sidan.
Rules- Här dyker det upp en lista av de regler som finns för DnD i kort form.
Conditions- Här dyker upp alla conditions som kan komma till i DnD.
Spells- Här dyker det upp en lång lista av alla de magiformler som fanns från den öppna Api:et DnD5eApi. 
        Man kan söka efter spells här samt filtera genom dem i levels och magiskola, samt kan man bokmärka 
        spellsen som då dyker upp i Homepage.

API som har använts : https://www.dnd5eapi.co/
Dependencies bibliotek som har använts i denna projekt: 

      - @expo-google-fonts/inknut-antiqua
      - @react-native-async-storage/async-storage
      - @react-native-vector-icons/material-design-icons
      - @react-navigation/native
      - expo
      - expo-font
      - expo-linking
      - expo-router
      - expo-status-bar
      - react
      - react-dom
      - react-native
      - react-native-gesture-handler
      - react-native-reanimated
      - react-native-safe-area-context
      - react-native-screens

## Fil struktur:

- Api folder
  - ConditionAPI.tsx
  - RulesectionAPI.tsx
  - SpellAPI.tsx
             
- App folder
  - _layout.tsx
    - (tabs) folder
       - _layout.tsx
       - Conditions.tsx
       - index.tsx
       - Rules.tsx
       - Spells.tsx
                              
- components folder
  - BookmarkButton.tsx
  - BookmarkedSpellList.tsx
  - ConditionCard.tsx
  - ConditionList.tsx
  - DataList.tsx
  - DropDownList.tsx
  - ErrorComponent.tsx
  - FontLoader.tsx
  - loading.tsx
  - RuleList.tsx
  - RuleSectionCard.tsx
  - SearchComponent.tsx
  - SpellCard.tsx
  - SpellList.tsx
 
- constants folder
  - spellOptions.ts
                    
- hooks folder
  - useBookmarkedFilterHook.ts
  - useFilteredDataHook.ts
  - useFocusHook.ts
  - useKeyExtractorHook.ts
  - useLoadingHook.ts
  - useSpellBookmark.ts
               
- Styles folder
  - Styling.ts

- types folder
  - bookmark.ts
  - condition.ts
  - dropdown.ts
  - fontloader.ts
  - general.ts
  - rulesection.ts
  - search.ts
  - spell.ts

- utils folder
  - fetchApiandCache.ts
  - filterSpells.ts
  - spellBookmarks.ts
  
- .gitignore
- app.json
- index.ts
- package-lock.json
- package.json
- tsconfig.json

## användning:

1. ladda ner och extrahera zipfilen
2. öppna i visual studio code
3. öppna ny terminal och skrev "npx expo start"
4. öppna expo go på din mobil
5. skanna qr koden som dök upp i terminalen
