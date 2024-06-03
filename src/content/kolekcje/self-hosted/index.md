---
title: "🐳 Self Hosted"
description: "Gotowe aplikacje, kontenery i usprawnienia dla Twojego życia."
date: "2024-05-26"
demoURL: "https://astro-micro.vercel.app"
repoURL: "https://github.com/trevortylerlee/astro-micro"
---

## 📷 Galerie / Biblioteki zdjęć

Rozwiązania alternatywne dla usług jak GooglePhotos

### PHP

Jeśli chcesz hostować galerię na hostingu współdzielonym z PHP Twój wybór jest mocno ograniczony, najlepszym rozwiązaniem będzie darmowe **Piwigo** możesz również wykorzystać Wordpress z odpowiednim zestawem wtyczek.

**Piwigo** ma całkiem spore możliwości konfiguracyjne, zawiera system uprawnień oraz wspiera wtyczki.

- [Piwigo](https://pl.piwigo.org/)

### Docker / Node

Tutaj wybór jest znacznie większy a dostępne aplikacje posiadają ciekawe funkcjonalności dodatkowe takie jak wyświetlanie zdjęć na mapie czy nawet funkcje tagujące zdjęcia z wykorzystaniem Deep Learningu. 

- [Lychee](https://lychee.electerious.com/) - Biblioteka zdjęć z dobrym UI, wygodna w zarządzaniu.
- PiGallery2 - Bardzo oszczędna w ram galeria napisana z myślą o Rasberry Pi, powinna pójść na ziemniaku, jeden z moich faworytów choć użytkownicy zgłaszają problemy przy bardzo dużej ilości zdjęć. **Zawiera widok mapy.**
- Photoprism - Rozbudowane wyszukiwanie, zintegrowana mapa, rozpoznawanie twarzy z AI.
- LibrePhotos - **Wsparcie dla RAW** i plików wideo, rozpoznawanie twarzy, widok osi czasu.
- Immich - Bardzo rozbudowana, aktywnie rozwijana. Posiada wiele funkcji i nowoczesne UI, problematyczne hostowanie wymagające kilku kontenerów, znaczne zużycie RAM.
- NextCloud Photos - Usługa do zdjęć wbudowana w system hostingu plików, posiada wiele funkcji. Jeśli masz już NextClouda lub potrzebujesz więcej funkcji niż tylko udostępnianie zdjęć warto rozważyć tę opcję.
- [Lista darmowych bibliotek foto na Github](https://github.com/meichthys/foss_photo_libraries) - Całą resztę **ze szczegółowym porównaniem funkcjonalności** znajdziesz tu.

## Sysadmin / zarządzanie

### Konteneryzacja:
- [Dockge](https://github.com/louislam/dockge) - Darmowy panel do zarządzania stackami docker-compose ze świetnym UI. 
- Portainer - Komercyjny panel do zarządzania kontenerami uruchomionymi na systemie. Posiada darmową wersję community edition, znacznie bardziej rozbudowany od poprzednika. 

### Monitorowanie:
- UptimeKuma - Monitor PING z rozbudowanymi opcjami i powiadomieniami, darmowa alternatywa np. dla UptimeRobot