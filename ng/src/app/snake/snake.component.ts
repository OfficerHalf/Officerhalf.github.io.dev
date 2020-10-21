import { Component, HostListener, OnInit } from '@angular/core';
import { Board, BoardRow, Direction, Snake, UI, Position } from 'src/models/snake';
import { createBoard, move as doMove, randomChoice } from 'src/utils/snake';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  board: Board;
  snake: Snake;
  direction: Direction;
  running: number;
  xSize: number;
  ySize: number;
  speedMs: number;
  minSpeedMs: number;
  lost: boolean;

  constructor() {}

  ngOnInit(): void {
    this.lost = false;
    this.xSize = 20;
    this.ySize = 20;
    this.speedMs = 1000;
    this.minSpeedMs = 500;
    this.board = createBoard(this.xSize, this.ySize);
    const startX = Math.floor(this.xSize / 2);
    const startY = Math.floor(this.ySize / 2);
    this.snake = [{ x: startX, y: startY }];
    this.board[this.snake[0].y][this.snake[0].x] = UI.snake;
    this.placeFood();
    this.direction = Math.floor(Math.random() * 4);
  }

  move() {
    // Find next position
    const newHead = doMove(this.snake[0], this.direction);
    let grow = false;

    // Check to see what's at the next position
    if (newHead.x < 0 || newHead.y < 0 || newHead.x >= this.xSize || newHead.y >= this.ySize) {
      this.lost = true;
    } else if (this.board[newHead.y][newHead.x] === UI.snake) {
      this.lost = true;
    } else if (this.board[newHead.y][newHead.x] === UI.food) {
      grow = true;
    }

    if (!this.lost) {
      // Move
      this.snake.unshift(newHead);
      this.board[newHead.y][newHead.x] = UI.snake;

      // Grow / move
      if (!grow) {
        const oldTail = this.snake.pop();
        this.board[oldTail.y][oldTail.x] = '';
      } else {
        this.speedMs -= 50;
        this.placeFood();
        this.start();
      }
    } else {
      this.stop();
    }
  }

  start() {
    this.stop();
    this.running = window.setInterval(() => this.move(), this.speedMs);
  }

  stop() {
    if (this.running) {
      window.clearInterval(this.running);
    }
  }

  placeFood(count: number = 1) {
    const choices: Position[] = [];
    for (let y = 0; y < this.ySize; y++) {
      for (let x = 0; x < this.xSize; x++) {
        if (this.board[y][x] === '') {
          choices.push({ x, y });
        }
      }
    }
    const positions = randomChoice(choices);
    positions.forEach(p => {
      this.board[p.y][p.x] = UI.food;
    });
  }

  @HostListener('document:keydown', ['$event'])
  changeDirection(event: KeyboardEvent) {
    switch (event.key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        if (this.direction !== Direction.North) {
          this.direction = Direction.South;
        }
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        if (this.direction !== Direction.South) {
          this.direction = Direction.North;
        }
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        if (this.direction !== Direction.East) {
          this.direction = Direction.West;
        }
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        if (this.direction !== Direction.West) {
          this.direction = Direction.East;
        }
        break;
      default:
        return;
    }
  }
}
