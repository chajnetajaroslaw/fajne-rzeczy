---
title: "🕷️ Web Scrapping"
description: "Zbieranie danych ze stron, pająki i automatyzacja"
date: "2024-05-31"
---
## Dlaczego ludzie scrappują?

*O, towarzysze moi! Czyż nie widzicie, że świat wokół nas jest niczym wielka księga, pełna tajemnic i wiedzy? Lecz jakże ją zgłębić, gdy oczy nasze są zbyt słabe, a umysły zbyt ograniczone? Oto dane, niczym drogocenne perły, rozproszone po bezmiarze sieci. Czyż nie powinniśmy ich zbierać, niczym pracowite mrówki, aby zbudować z nich gmach wiedzy, który przyniesie korzyść nam wszystkim?*

*Scrapowanie, o moi bracia, to nie tylko narzędzia, to klucz do poznania. Dzięki niemu możemy odkryć wzorce, zależności, trendy, które umykają naszym zmysłom. Możemy przewidzieć przyszłość, zrozumieć teraźniejszość i wyciągnąć wnioski z przeszłości. Czyż nie jest to godne naszych wysiłków?*

*Nie lękajcie się, o sceptycy! Scrapowanie to nie kradzież, lecz zbieranie tego, co leży odłogiem. To nie naruszenie prywatności, lecz wykorzystanie tego, co jest publicznie dostępne. To nie bezduszne gromadzenie danych, lecz szlachetne dążenie do poznania.*

**Web scraping** to technika wyodrębniania danych ze stron internetowych, która zastępuje ręczne, powtarzalne wpisywanie lub kopiowanie i wklejanie. Pozyskane dane często są przechowywane w ustrukturyzowanym formacie¹. Oto kilka możliwych zastosowań web scrapingu:

- **Monitoring konkurencji**: Firmy mogą pobierać informacje o produktach swojej konkurencji.
- **Customowe alerty**: Dowiedz się pierwszy kiedy coś stanieje lub będzie dostępne.
- **Pozyskiwanie danych o klientach**: Można pobierać informacje o potencjalnych klientach (osoby fizyczne lub inne firmy).
- **Porównywanie cen**: Portale takie jak Ceneo mogą pobierać informacje o cenach w celu znalezienia najtańszej oferty.
- **Przeszukiwanie ofert pracy**: Portale agregujące oferty pracy mogą pobierać informacje o nowych ofertach z innych źródeł.
- **Dane o nieruchomościach**: Portale o nieruchomościach mogą pobierać dane o nowo powstałych projektach inwestycyjnych³.

## Metody Programistyczne

Najczęściej scrappuje się z wykorzystaniem Pythona lub JavaScript. Pozyskiwać dane ze stron możemy fetchując i analizując ich kod HTML, jednak w przypadku bardziej interaktywncyh stron internetowych konieczne może być scrappowanie z wykorzystaniem zdalnie kontrolowanego sterownika przeglądarki internetowej.

### Javascript

- Crawlee - toolkit do scrappowania z szeregiem ułatwień. Obsługuje wiele metod i sterowników.
- Puppeteer - biblioteka do node.js pozwalająca na scrappowanie z wykorzystaniem sterownika chrome.
- Cheerio

## Narzędzia No Code

Gotowe narzędzia, zazwyczaj w modelu freemium. Najlepsze jakie znalazłem to Octoparse, oferuje dużo funkcji za darmo. Inne warte sprawdzenia to min. Parsehub.

## Chiński Prezent (EasyScrapper) 🐉

Zawsze uważałem że za darmo to uczciwa cena, darmowy open-source'owy wizualny scrapper od przyjaciół z Chin.Posiada angielską wersję językową i dokumentację na github. Interfejs przypomina wspomnianego Octoparse natomiast w przeciwieństwie do niego jest całkowicie darmowy, pozwala również eksportować i uruchamiać kod zdalnie (np. na VPS).

## Darmowa automatyacja w Chrome

Automatyzacja to bardzo szeroki temat, często wykorzystywane są te same technologie co do scrappingu np. Playwright. Kiedyś opiszę szerzej dostępne rozwiązania, dziś zostawiam Ci fajne narzędzie:

Automa jest rozszerzeniem przeglądarki służącym do automatyzacji pracy. Od automatycznego wypełniania formularzy, przez wykonywanie powtarzających się zadań, robienie zrzutów ekranu, po scrapowanie danych ze stron internetowych. Ładny intuicyjny interfejs oparty o nody, naprawdę warta uwagi darmowa wtyczka.

[Pobierz Automa dla Chrome](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca)

[Pobierz Automa dla Firefox](https://addons.mozilla.org/en-US/firefox/addon/automa/)

---
**Jak to jest scrappować? Dobrze, czy nie dobrze?**


*Moim zdaniem to nie ma tak, że dobrze albo że nie dobrze. Gdybym miał powiedzieć, co cenię w scrappowaniu najbardziej, powiedziałbym, że dane. Ekhm… Dane, które można wydobyć z witryn internetowych. Kiedy sobie nie radzisz, te dane są niczym pomocna dłoń, i co ciekawe, to właśnie przypadkowe spotkania z interesującymi danymi wpływają na nasze projekty. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je znalazłem. I dziękuję kodowi. Dziękuję mu, kod to struktura, kod to analiza, kod to automatyzacja. Wielu ludzi pyta mnie o to samo, ale jak ty to robisz?, skąd czerpiesz tę radość? A ja odpowiadam, że to proste, to umiłowanie kodu, to właśnie ono sprawia, że dzisiaj na przykład buduję scrapery, a jutro… kto wie, dlaczego by nie, stworzę kolejny bot do zbierania… znaczy… danych.* 🤖
