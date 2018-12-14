import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

  public get catName(): string {
    return this.route.snapshot.paramMap.get('catName');
  }

}
