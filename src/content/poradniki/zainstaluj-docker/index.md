---
title: "🐳 Instalacja Docker + GUI"
description: "Zacznij używać kontenerów już dziś. Instalacja Docker i zarządzanie z GUI"
date: "2024-05-22"
demoURL: "https://astro-nano-demo.vercel.app"
repoURL: "https://github.com/markhorn-dev/astro-nano"
---

## Wstęp

W tym poradniku opiszę jak najszybciej zainstalować Docker na **czystym systemie** i zacząć korzystać z obrazów kontenerów. 

Zakładam że masz dostęp do czystego systemu / maszyny wirtualnej / VPS ([o najtańszym serwerze VPS pisałem tu](../../kolekcje/tanie-hostingi#najta%C5%84szy-serwer-vps)) z zainstalowanym Ubuntu lub Debianem. W celu instalacji dockera wykorzystamy skrypt **install-docker.sh** z [get.docker.com](https://get.docker.com/).

![](/fajne-rzeczy/blog/docker.jpg)

## Instalacja Docker Desktop w Windows, Mac, Linux

Jeśli chcesz uruchomić DockerEngine na swoim PC, możesz po prostu [pobrać Docker Desktop](https://www.docker.com/products/docker-desktop/) zainstaluje on wszystkie potrzebne komponenty oraz posiada GUI do zarządzania. W przypadku windows dodatkowo zainstalowany zostanie WSL (Windows Subsystem for Linux) czyli zintegrowane środowisko systemu GNU/Linux działające w tle, będziemy mogli również uruchamiać komendy dockera bezpośrednio w terminalu windows. W tej konfiguracji zalecam posiadać minimum 16GB ramu ponieważ uruchomiony WSL lubi zjadać zasoby.

---

## 1. Ustalenie IP hosta

Otwieramy terminal na naszej maszynie łącząc się przez SSH lub korzystając z fizycznego dostępu, najpierw sprawdźmy adres IP naszej maszyny i zanotujmy go.

```sh
ip a
```

Jeśli maszyna uzyskuje adres dynamicznie przez DHCP warto [ustawić stały adres IP](https://porady-it.pl/linux/linux-ustawic-statyczny-adres-ip-poziomu-konsoli/)

## 2. Uruchomienie skryptu

Skrypt **install-docker.sh** zainstaluje wszystkie potrzebne komponenty, Docker Engine oraz dodatek do obsługi składni **docker-compose** pozwalającej na wygodne uruchamianie zestawów kontenerów.

Upewnij się że Twój system jest aktualny oraz w razie potrzeby zaktualizuj go uruchamiając komendy

```sh
sudo apt update -y && sudo apt full-upgrade
```

pobieramy skrypt komendą curl: 

(jeśli nie działa być może trzeba zainstalować curl: *sudo apt install curl*)

```sh
curl -fsSL https://get.docker.com -o install-docker.sh
```

następnie uruchamiamy proces instalacji poleceniem:

```sh
sudo sh install-docker.sh
```

po pomyślnym wykonaniu skryptu mamy zainstalowany silnik konteneryzacji Docker wraz z potrzebnymi dodatkami, zweryfikuj działanie wpisując:

```sh
docker --version
```

jeśli instalacja przebiegła poprawnie wyświetli się wersja zainstalowanego silnika.

## 3. Instalacja GUI

Przed przystąpieniem do korzystania z interfejsu graficznego do zarządzania kontenerami gorąco zachęcam do zapoznania się z podstawami obsługi Dockera przez wiersz poleceń, pozwoli to zrozumieć zasady jego działania. Dla ułatwionego zarządzania uruchomionymi usługami zainstalujemy darmowy panel **Dockge** lub alternatywnie **Portainer Community Edition**

### Instalacja Dockge:
[Dockge na Github](https://github.com/louislam/dockge)

```sh
# Utwórz katalogi, w których będą przechowywane stosy docker-compose oraz pliki stosu Dockge.
mkdir -p /opt/stacks /opt/dockge

# Wejdź do katalogu
cd /opt/dockge

# Pobierz plik compose.yaml
curl https://raw.githubusercontent.com/louislam/dockge/master/compose.yaml --output compose.yaml

# Uruchom Dockge
docker compose up -d

```

Po wykonaniu poprawnie wszystkich poleceń panel Dockge jest dostępny pod adresem http://localhost:5001 lub http://adresmaszyny:5001 zamieniając adresmaszyny na IP które zapisaliśmy w pierwszym kroku.


### Instalacja Portainer CE:

Portainer Community Edition to darmowa edycja komercyjnego panelu do zarządzania kontenerami, posiada znacznie bardziej rozbudowane opcje niż Dockge co nie zawsze jest jego zaletą.

Utwórz wolumen portainer_data w którym docker będzie przechowywał konfigurację Portainera

```sh
docker volume create portainer_data
```

Następnie pobierz i utwórz kontener z Portainerem za pomocą jednej komendy

```sh
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

po pomyślnym wykonaniu komendy i utworzeniu kontenera Portainer jest dostępny pod adresem https://localhost:9443 lub http://adresmaszyny:9443 zamieniając adresmaszyny na IP które zapisaliśmy w pierwszym kroku.
