JE EIGEN LOGO TOEVOEGEN
=======================

1. Vervang deze twee bestanden door je eigen logo (zelfde bestandsnamen):

     logo.svg        -> donkere versie  (voor lichte achtergrond — header)
     logo-white.svg  -> lichte versie   (voor donkere achtergrond — footer/menu)

   SVG heeft de voorkeur (scherp op elk formaat). PNG met transparante
   achtergrond kan ook; pas dan de bestandsnamen aan in lib/data.ts.

2. Zet in lib/data.ts de instelling `useImageFiles` op `true`:

     export const logo = {
       useImageFiles: true,   // <-- aanzetten
       ...
     }

3. Klaar. Je logo verschijnt automatisch in de header, footer en het
   mobiele menu. De hoogte wordt automatisch geschaald; de breedte volgt
   de verhouding van jouw bestand.

Tip: het favicon staat los in app/icon.svg — vervang dat door je monogram
voor een merkvast tabblad-icoon.

De huidige logo.svg / logo-white.svg zijn tijdelijke plaatshouders.
