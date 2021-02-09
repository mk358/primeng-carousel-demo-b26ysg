import {Component, ViewEncapsulation} from '@angular/core';
import { ProductService } from './productservice';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
    products;
    images: any = [
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria1.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria2.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria2s.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria3.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria3s.jpg",
            "alt": "Description for Image 3",
            "title": "Title 3"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria4.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria4s.jpg",
            "alt": "Description for Image 4",
            "title": "Title 4"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria5.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria5s.jpg",
            "alt": "Description for Image 5",
            "title": "Title 5"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria6.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria6s.jpg",
            "alt": "Description for Image 6",
            "title": "Title 6"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria7.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria7s.jpg",
            "alt": "Description for Image 7",
            "title": "Title 7"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria8.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria8s.jpg",
            "alt": "Description for Image 8",
            "title": "Title 8"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria9.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria9s.jpg",
            "alt": "Description for Image 9",
            "title": "Title 9"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria10.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria10s.jpg",
            "alt": "Description for Image 10",
            "title": "Title 10"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria11.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria11s.jpg",
            "alt": "Description for Image 11",
            "title": "Title 11"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria12.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria12s.jpg",
            "alt": "Description for Image 12",
            "title": "Title 12"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria13.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria13s.jpg",
            "alt": "Description for Image 13",
            "title": "Title 13"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria14.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria14s.jpg",
            "alt": "Description for Image 14",
            "title": "Title 14"
        },
        {
            "previewImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria15.jpg",
            "thumbnailImageSrc": "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/showcase/images/galleria/galleria15s.jpg",
            "alt": "Description for Image 15",
            "title": "Title 15"
        }
    ];
	
	responsiveOptions;
  pNo = 3;
      get activeIndex(): number {
        return this._activeIndex;
    }

    set activeIndex(newValue) {
        if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
            this._activeIndex = newValue;
        }
    }

    _activeIndex: number = 1;

	constructor(private productService: ProductService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1000px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '500px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '100px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		// this.productService.getImages().then(products => {
		// 	this.products = products;
    //   console.log(products);
		// });
    // this.productService.getImages().then((images) => {this.images = images;console.log(this.images)});
    }
    next() {
        this.activeIndex++;
    }

    prev() {
        this.activeIndex--;
    }
}
