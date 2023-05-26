import { Component, OnInit } from '@angular/core';
import { Iproudct } from 'src/models/iproudct';

@Component({
  selector: 'app-proudcts',
  templateUrl: './proudcts.component.html',
  styleUrls: ['./proudcts.component.css'],
})
export class ProudctsComponent implements OnInit {
  ngOnInit(): void {}
  myProudctArr: Iproudct[] = [
    {
      proId: 1,
      proImg: 'assets/imgs/d1.jpg',
      proName: 'ZARA',
      proDetails: 'lorem fas fasj nfealn fes se;fm esf awd ferg sdgsgrgsd',
      proPrice: 120,
      proQuantity: 5,
    },
    {
      proId: 2,
      proImg: 'assets/imgs/m1.jpg',
      proName: 'GUCCI',
      proDetails: 'loremas fsdf asfsdg ges dsg rg wd sg erg sfew fwef ',
      proPrice: 130,
      proQuantity: 13,
    },
    {
      proId: 3,
      proImg: 'assets/imgs/b3.jpg',
      proName: 'SHEE IN',
      proDetails: 'lorem ipsum hello world with any thing  vr',
      proPrice: 115,
      proQuantity: 1,
    },
    {
      proId: 4,
      proImg: 'assets/imgs/b2.jpg',
      proName: 'ZARA',
      proDetails: 'dwpokdk jiefoipfihef i kfjsfj kdsjfip im fdf frg  ',
      proPrice: 55,
      proQuantity: 0,
    },
    {
      proId: 5,
      proImg: 'assets/imgs/b1.jpg',
      proName: 'HAMMO',
      proDetails: ' fpjf jpojklh  smi  sfjn ijf fsd;f fgr vdgr  efef',
      proPrice: 145,
      proQuantity: 1,
    },
    {
      proId: 6,
      proImg: 'assets/imgs/b4.jpg',
      proName: 'DOKY',
      proDetails: ' fewkfslidhf ef[poeodjklas fh[kfp[lf kf  frgrgrg ',
      proPrice: 180,
      proQuantity: 15,
    },
    {
      proId: 7,
      proImg: 'assets/imgs/6.jpg',
      proName: 'BAZAR',
      proDetails: 'oj jh owdmsdaj jdpqd md srgopkrgo pogjrg  reg ',
      proPrice: 165,
      proQuantity: 0,
    },
    {
      proId: 8 ,
      proImg: 'assets/imgs/5.jpg',
      proName: 'UTIL',
      proDetails: ' fpwuefjsfopf f ewfj k;af ij  dswf f grgroekg wrg ',
      proPrice: 145,
      proQuantity: 7,
    },
  ];

  
  reciveMyOpj(showOpj:{}) {
    console.log(showOpj);
  }
  acceptMyArr(newArr: []) {
    this.myProudctArr = newArr;
  }
}
