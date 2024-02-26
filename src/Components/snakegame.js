import React, { useState, useEffect, useRef } from 'react';

const ROWS = 20;
const COLS = 20;
const CELL_SIZE = 30;
const INITIAL_SPEED = 150;

const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(Direction.RIGHT);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const gameRef = useRef();

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== Direction.DOWN) setDirection(Direction.UP);
          break;
        case 'ArrowDown':
          if (direction !== Direction.UP) setDirection(Direction.DOWN);
          break;
        case 'ArrowLeft':
          if (direction !== Direction.RIGHT) setDirection(Direction.LEFT);
          break;
        case 'ArrowRight':
          if (direction !== Direction.LEFT) setDirection(Direction.RIGHT);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if (isGameRunning) {
      const moveSnake = () => {
        if (isGameOver) return;

        const newHead = { ...snake[0] };

        switch (direction) {
          case Direction.UP:
            newHead.y -= 1;
            break;
          case Direction.DOWN:
            newHead.y += 1;
            break;
          case Direction.LEFT:
            newHead.x -= 1;
            break;
          case Direction.RIGHT:
            newHead.x += 1;
            break;
          default:
            break;
        }

        if (
          newHead.x < 0 ||
          newHead.x >= COLS ||
          newHead.y < 0 ||
          newHead.y >= ROWS ||
          snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
        ) {
          setIsGameOver(true);
          setIsGameRunning(false);
          return;
        }

        const newSnake = [newHead, ...snake];
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomPosition());
        } else {
          newSnake.pop();
        }

        setSnake(newSnake);
      };

      gameRef.current = setInterval(moveSnake, speed);

      return () => clearInterval(gameRef.current);
    }
  }, [snake, direction, food, speed, isGameOver, isGameRunning]);

  useEffect(() => {
    if (isGameOver) {
      clearInterval(gameRef.current);
    }
  }, [isGameOver]);

  const handleStartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(getRandomPosition());
    setDirection(Direction.RIGHT);
    setSpeed(INITIAL_SPEED);
    setIsGameOver(false);
    setIsGameRunning(true);
  };

  const handleRestartGame = () => {
    handleStartGame();
  };

  return (
    <div>
      <h1>Snake Game</h1>
      <div style={{ position: 'relative', width: COLS * CELL_SIZE, height: ROWS * CELL_SIZE, border: '1px solid black' }}>
        {snake.map((segment, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: CELL_SIZE,
              height: CELL_SIZE,
              backgroundColor: 'green',
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            width: CELL_SIZE,
            height: CELL_SIZE,
            backgroundColor: 'red',
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        />
      </div>
      {!isGameRunning && !isGameOver && (
        <button onClick={handleStartGame}>Start Game</button>
      )}
      {isGameOver && (
        <div>
          <p>Game Over!</p>
          <button onClick={handleRestartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * COLS),
  y: Math.floor(Math.random() * ROWS),
});

export default SnakeGame;
