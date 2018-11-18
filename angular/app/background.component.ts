import { Component } from '@angular/core';

@Component({
  selector: 'my-bg',
  template: `
  <div style="position:absolute; top:40px; left:650px;">
  <pre>
_____________
/    │       
 　　〇
  ───┼───
     │　
　 　/\\　
  　/  \\   
</pre>
  </div>
    `,
  styles: [`
    pre {
      color:rgb(225, 0, 0);
      font-size: 60pt;
      font-weight: bold;
      text-align: left;
    }`
  ]
})

export class BackgroundComponent  { 

  }