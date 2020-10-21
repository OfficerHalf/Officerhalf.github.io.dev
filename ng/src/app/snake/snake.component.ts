import { Component, HostListener, OnInit } from '@angular/core';
import { Board, BoardRow, Direction, Snake, UI } from 'src/models/snake';
import { createBoard, move as doMove } from 'src/utils/snake';

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

  constructor() {}

  ngOnInit(): void {
    const size = 10;
    this.board = createBoard(size, size);
    const start = Math.floor(size / 2);
    this.snake = [{ x: start, y: start }];
    this.direction = Math.floor(Math.random() * 4);
    window.addEventListener('keydown', event => this.changeDirection(event));
  }

  move() {
    const newHead = doMove(this.snake[0], this.direction);
    this.snake.unshift(newHead);
    this.snake.pop();
  }

  start() {
    this.stop();
    this.running = window.setInterval(() => this.move(), 1000);
  }

  stop() {
    if (this.running) {
      window.clearInterval(this.running);
    }
  }

  changeDirection(event: KeyboardEvent) {
    switch (event.key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        this.direction = Direction.South;
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        this.direction = Direction.North;
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        this.direction = Direction.West;
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        this.direction = Direction.East;
        break;
      default:
        return;
    }
  }
}
