import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from '../../../shared/services/modal.service';
import { ImageModalComponent } from '../../../shared/components/image-modal/image-modal.component';
import { BlogPostExtendedData } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog.service';
import { ImageModalData } from 'src/app/shared/interfaces/modal.interface';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  blogPost = new BehaviorSubject<BlogPostExtendedData>((undefined as unknown) as BlogPostExtendedData);
  private readonly destroy = new Subject();
  private markForCheck = false;
  @ViewChildren('body') bodyElement!: QueryList<ElementRef<HTMLDivElement>>;

  constructor(
    private route: ActivatedRoute,
    private readonly blogService: BlogService,
    private readonly sanitizer: DomSanitizer,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy)).subscribe(paramMap => {
      const slug = paramMap.get('slug') as string;
      const post = this.blogService.getPost(slug);
      if (post) {
        this.blogPost.next({
          data: post.data,
          body: this.sanitizer.bypassSecurityTrustHtml(post.data.body),
          meta: post.meta,
          dates: {
            created: new Date(post.data.created),
            published: new Date(post.data.published),
            updated: new Date(post.data.updated)
          }
        });
        this.markForCheck = true;
      }
    });
  }

  ngAfterViewInit(): void {
    this.bodyElement.changes.pipe(takeUntil(this.destroy)).subscribe(() => {
      if (this.bodyElement) {
        const body = this.bodyElement.first.nativeElement;
        const images = body.querySelectorAll('img');
        images.forEach(img => {
          img.style.cursor = 'pointer';
          img.onclick = () => this.openImageModal(img);
        });
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.bodyElement && this.markForCheck) {
      this.bodyElement.notifyOnChanges();
      this.markForCheck = false;
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  openImageModal(image: HTMLImageElement): void {
    this.modalService.open<void, ImageModalData>(ImageModalComponent, {
      src: image.src,
      alt: image.alt,
      text: image.alt
    });
  }
}
