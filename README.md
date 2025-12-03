### Hexlet tests and linter status:

[![Actions Status](https://github.com/suprimek0/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/suprimek0/frontend-project-44/actions)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=suprimek0_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=suprimek0_frontend-project-44)

# Brain Games

Набор CLI-игр для тренировки устного счета и логического мышления.

## Описание

Проект включает в себя 5 обучающих игр:
- **Brain Even** — определение чётности числа.
- **Brain Calc** — вычисление арифметических выражений (сложение, вычитание, умножение).
- **Brain GCD** — нахождение наибольшего общего делителя (НОД) двух чисел.
- **Brain Progression** — определение пропущенного числа в арифметической прогрессии.
- **Brain Prime** — определение, является ли число простым.

## Требования 

- Node.js ≥ 18.0.0
- npm ≥ 9.0.0

## Установка

1. Клонируйте репозиторий (если требуется):
  ```bash
   git clone https://github.com/suprimek0/frontend-project-44.git
2. установите пакет глобально:
  ```bash
  npm install -g .
3. Запуск игр
После установки доступны команды:
- brain-even
- brain-calc
- brain-gcd
- brain-progression
- brain-prime
  
  Пример запуска:
    ```bash
    brain-prime

## Игровой процесс
Каждая игра:
1. Приветствует игрока и запрашивает имя.
2. Выводит описание задания.
3. Показывает вопрос.
4. Ждёт ввода ответа.
5. Проверяет ответ:
    - При верном ответе: выводит Correct!.
    - При ошибке: показывает правильный ответ и предлагает попробовать снова.
6. Завершается при:
    - 3‑х правильных ответах подряд (победа).
    - Первом неверном ответе (поражение).

## Демонстрации игрового процесса

![ Демонстрация игры Brain Even ] (https://asciinema.org/a/etk1GwYLRukLNqW55vh0giwpC)
> Полная запись: https://asciinema.org/connect/70bdf4f3-40e7-41ce-a5ac-54be40c42e17 

![ Демонстрация игры Brain Calc ] (https://asciinema.org/a/2Z6AsjtfymFnFCP1JcA7H26oY)
> Полная запись: https://asciinema.org/connect/70bdf4f3-40e7-41ce-a5ac-54be40c42e17 

![ Демонстрация игры Brain GCD ] (https://asciinema.org/a/RZkFyBaUtqgHxJGBhqU5MfaMd)
> Полная запись: https://asciinema.org/connect/70bdf4f3-40e7-41ce-a5ac-54be40c42e17

![ Демонстрация игры Brain Progression ] (https://asciinema.org/a/LWCyu5xk1z2AUHp9ibSM76wDl)
> Полная запись: https://asciinema.org/connect/70bdf4f3-40e7-41ce-a5ac-54be40c42e17

![ Демонстрация игры Brain Prime ] (https://asciinema.org/a/Err8VPDiAUGUR4QdjpHFJVOCN)
> Полная запись: https://asciinema.org/connect/70bdf4f3-40e7-41ce-a5ac-54be40c42e17
