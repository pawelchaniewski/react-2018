# Lab 2  04

## Zadanie 1
Zbuduj prosty formularz składający się z niekontrolowanych komponentów(Uncontrolled Components).
Formularz powinien zawierać pola: Imie, Nazwisko. Po wysłaniu formularza wprowadzone dane powinny zostać wypisane w konsoli.

Nie używaj state, wykorzystaj ref.


## Zadanie 2
Przerób formularz z zadania 1 tak aby niekontrolowane komponenty zastąpić kontrolowanymi (Controlled Components).
Wykorzystaj state do przechowywania wartości z inputów. Po wysłaniu formularza wprowadzone dane powinny zostać wypisane w konsoli.


## Zadanie 3
Zapoznaj się z biblioteką `React Final Form` https://github.com/final-form/react-final-form i zobacz jak w łatwy sposób możesz budować formularze.
Wykorzystaj formularz z zadania 2 i użyj powyższej biblioteki do jego obsługi.

## Zadanie 4
Do formularza z zadania 3 dodaj walidacje i wyświetl błąd pod każdym z pól które nie zostało wypełnione.

Dodatkowo wykorzystaj `Final Form Focus` https://github.com/final-form/final-form-focus

## Zadanie 5
Pobierz randomowego użytkownika korzystając z API  https://randomuser.me/ oraz wyświetl kartę z podstawowymi informacjami o nim.
Dodaj przycisk, który wylosuje kolejnego użytkownika nie przeładowując całej strony.
Pamiętaj o podejściu Presentational and Container Components, aby rozdzielić logike od warstwy prezentacji.

## Zadanie 6
Przygotuj komponent, który będzie zliczał kliknięcia w przycisk. Wykorzystaj do tego Functional Component oraz hook `useState`.

## Zadanie 7
Do komponentu z zadania 6 dodaj efekt uboczny tak aby tytuł strony zawierał aktualną liczbę kliknięć. Wykorzystaj hook `useEffect`

## Zadanie 8
Zapoznaj sie z działaniem `useRef` w tym celu stwórz komponent który będzie zawierał input oraz button, który będzie ustawiał focus na inpucie.

## Zadanie 9
Stwórz w aplikacji Context, który będzie zawierał informacje o wybranym języku. Dodaj 2 komponenty używające tego Contextu korzystając z `useContext`.
Zadaniem jednego z nich będzie wyświetlenie informacji o wybranym języku, a drugiego zmiana tego języka.

## Zadanie 10
Wykorzystując poznane hooki stwórz prostą liste TODO. Tytuł strony powinien zawierać informacje o liczbie dodanych elementów.

## Praca domowa
Zrealizuj Zadanie 5 przy użyciu hooków. Na potrzeby tego zadania stwórz własny hook `useRandomUserApi`, który będzie pobierał dane z API.