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
  lastDirection: Direction;
  running: number;
  xSize: number;
  ySize: number;
  maxSpeedMs: number;
  minSpeedMs: number;
  speedPercent: number;
  speedStep: number;
  lost: boolean;
  capSpeed: boolean;

  constructor() {}

  ngOnInit(): void {
    this.capSpeed = true;
    this.reset();
  }

  move() {
    // Find next position
    this.lastDirection = this.direction;
    const last = this.snake[this.snake.length - 1];
    const newHead = doMove(this.snake[0], this.direction);
    let grow = false;

    // Check to see what's at the next position
    if (newHead.x < 0 || newHead.y < 0 || newHead.x >= this.xSize || newHead.y >= this.ySize) {
      this.lost = true;
    } else if (this.board[newHead.y][newHead.x] === UI.snake) {
      // make sure this isn't the end of our tail, that's okay
      if (!(newHead.x === last.x && newHead.y === last.y)) {
        this.lost = true;
      }
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
        // Don't remove this if the new head is our old tail
        if (!(oldTail.x === newHead.x && oldTail.y === newHead.y)) {
          this.board[oldTail.y][oldTail.x] = '';
        }
      } else {
        if (this.capSpeed === true) {
          this.speedPercent = Math.min(this.speedPercent + this.speedStep, 100);
        } else {
          this.speedPercent = this.speedPercent + this.speedStep;
        }
        this.placeFood();
        this.start();
      }
    } else {
      this.stop();
    }
  }

  start() {
    this.stop();
    this.running = window.setInterval(() => this.move(), Math.max(this.speed, 5));
  }

  stop() {
    if (this.running) {
      window.clearInterval(this.running);
    }
  }

  reset() {
    this.stop();
    this.lost = false;
    this.xSize = 20;
    this.ySize = 20;
    this.maxSpeedMs = 800;
    this.minSpeedMs = 200;
    this.speedStep = 5;
    this.speedPercent = 0;
    this.board = createBoard(this.xSize, this.ySize);
    const startX = Math.floor(this.xSize / 2);
    const startY = Math.floor(this.ySize / 2);
    this.snake = [{ x: startX, y: startY }];
    this.board[this.snake[0].y][this.snake[0].x] = UI.snake;
    this.placeFood();
    this.direction = Math.floor(Math.random() * 4);
    this.lastDirection = (this.direction + 2) % 4;
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
        if (this.lastDirection !== Direction.North) {
          this.direction = Direction.South;
        }
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        if (this.lastDirection !== Direction.South) {
          this.direction = Direction.North;
        }
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        if (this.lastDirection !== Direction.East) {
          this.direction = Direction.West;
        }
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        if (this.lastDirection !== Direction.West) {
          this.direction = Direction.East;
        }
        break;
      default:
        return;
    }
  }

  get speed(): number {
    const step = (this.maxSpeedMs - this.minSpeedMs) / 100;
    return this.maxSpeedMs - this.speedPercent * step;
  }
}
