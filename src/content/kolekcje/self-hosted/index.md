---
title: "🐳 Self Hosted"
description: "Gotowe aplikacje, kontenery i usprawnienia dla Twojego życia."
date: "2024-05-26"
demoURL: "https://astro-micro.vercel.app"
repoURL: "https://github.com/trevortylerlee/astro-micro"
---

## Wstęp

Poniżej przedstawiam wam najciekawsze aplikacje do samo-hostowania. Większość z nich wymaga działającego DockerEngine, [jak go najszybciej zainstalować, pisałem tu.](../../poradniki/zainstaluj-docker)

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
- [PiGallery2](https://github.com/bpatrik/pigallery2) - Bardzo oszczędna w ram galeria napisana z myślą o Rasberry Pi, powinna pójść na ziemniaku, jeden z moich faworytów choć użytkownicy zgłaszają problemy przy bardzo dużej ilości zdjęć. **Zawiera widok mapy.**
- [Photoprism](https://github.com/photoprism/photoprism) - Rozbudowane wyszukiwanie, zintegrowana mapa, rozpoznawanie twarzy z AI.
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - **Wsparcie dla RAW** i plików wideo, rozpoznawanie twarzy, widok osi czasu.
- [Immich](https://github.com/immich-app/immich) - Bardzo rozbudowana, aktywnie rozwijana. Posiada wiele funkcji i nowoczesne UI, problematyczne hostowanie wymagające kilku kontenerów, znaczne zużycie RAM.
- [NextCloud Photos (Memories)](https://github.com/nextcloud/photos) - Usługa do zdjęć wbudowana w system hostingu plików, posiada wiele funkcji. Jeśli masz już NextClouda lub potrzebujesz więcej funkcji niż tylko udostępnianie zdjęć warto rozważyć tę opcję.
- [Lista darmowych bibliotek foto na Github](https://github.com/meichthys/foss_photo_libraries) - Całą resztę **ze szczegółowym porównaniem funkcjonalności** znajdziesz tu.

---

## 📂 Pliki

### Hostowanie
- [NextCloud](https://nextcloud.com/) - Najlepsza darmowa usługa chmury plików, mnogość funckji i wtyczek pozwoli Ci dostosować ją do Twoich potrzeb. Posiada wbudowane aplikacje pakietu office oraz serwer do współpracy w czasie rzeczywistym.
- [CloudReve](https://github.com/cloudreve/Cloudreve) - Chińska (posiada język angielski) kopia GoogleDrive z mnogością funckji, zaawansowane zarządzanie plikami, udostępnianie, użytkownicy, grupy, uprawnienia, webDav, możliwość podłączenia wielu zewnętrznych storage jak np S3. Bardzo fajna alternatywa dla **NextClouda**
- [AnonUpload](https://github.com/Supernova3339/anonupload) - Prosty skrypt do anonimowego uploadowania i hostowania plików działający 100% w PHP. 

### Synchronizacja
- [Syncthing](https://syncthing.net/) - program do synchronizacji plików / folderów pomiędzy dwoma lub więcej urządzeniami, pozwala na zaawansowaną konfigurację, wersjonowanie plików itp. 

---

## 💻 Sysadmin / zarządzanie

- [Ansible](https://www.ansible.com/) - Opensource'owe oprogramowanie służące do automatyzacji wdrażania, konfiguracji i zarządzania. Niski próg wejścia, duże community jak i dostępność mnóstwa rozszerzeń sprawia że Ansible to obowiązkowa umiejętność i narzędzie w Twoim zestawie.
- [Kestra](https://kestra.io/) - Rozbudowane narzędzie do tworzenia złożonych deklaratywnych automatyzacji. Możesz dzięki niemu tworzyć zaawansowane przepływy pracy i zarządzać ich harmonogramem. Przykładowe zastosowania: **uruchamianie skryptów ansible, python, aktualizowanie i zarządzanie kontenerami, automatyzowanie pracy serwerów.**

### Konteneryzacja:
- [Dockge](https://github.com/louislam/dockge) - Darmowy panel do zarządzania stackami docker-compose ze świetnym UI. 
- [Portainer](https://www.portainer.io/) - Komercyjny panel do zarządzania kontenerami uruchomionymi na systemie. Posiada [darmową wersję community edition](https://docs.portainer.io/start/install-ce), znacznie bardziej rozbudowany od poprzednika. 
- [Dokemon](https://dokemon.dev/) - Nowa propozycja do zarządzania kontenerami z GUI, wygląda naprawdę interesująco, posiada więcej opcji niż Dockge, mniej niż Portainer.

### Monitorowanie:
- [UptimeKuma](https://github.com/louislam/uptime-kuma) - Monitor PING z rozbudowanymi opcjami i powiadomieniami, darmowa alternatywa np. dla UptimeRobot

---

## 🗃️ Listy

Duże listy aplikacji selfhosted, jeśli chce Ci się kopać to na pewno znajdziesz coś fajnego.

- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)
- [Unraid Community Apps](https://unraid.net/community/apps)
- [Portainer Templates](https://portainer-templates.as93.net/)
- [EasyPanel Templates](https://easypanel.io/templates)