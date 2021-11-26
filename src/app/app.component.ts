import { Component } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  constructor(private statsService: StatsService) { }

  user: string = '';
  //playedArtists = [{ "artist": " ", "times": "" }];
  //playedTracks = [{ "track": " ", "artist": "", "times": "" }];
  playedArtists = [{ "artist": "Bad Bunny", "times": 7 }, { "artist": "Anuel AA", "times": 1 }, { "artist": "Anuel AA", "times": 1 }, { "artist": "Anuel AA", "times": 1 }, { "artist": "Anuel AA", "times": 1 }];
  playedTracks = [{ "track": "Volvi", "artist": "Bad Bunny", "times": 7 }, { "track": "La ultima vez", "artist": "Anuel AA", "times": 1 }, { "track": "La ultima vez", "artist": "Anuel AA", "times": 1 }, { "track": "La ultima vez", "artist": "Anuel AA", "times": 1 }, { "track": "La ultima vez", "artist": "Anuel AA", "times": 1 }];
  fails = [{ "word": "Yeah", "times": 10 }, { "word": "noche", "times": 6 }, { "word": "el", "times": 3 }, { "word": "baby", "times": 3 }, { "word": "yeaaaah", "times": 3 }];
  asserts = [{ "word": "La", "times": 30 }, { "word": "el", "times": 9 }, { "word": "la", "times": 6 }, { "word": "hola", "times": 6 }, { "word": "Volvi", "times": 3 }];

  //Asserts Chart//
  public mbarChartLabelsAsserts: string[] = [];
  public barChartDataAsserts: any[] = [
    { data: [], label: 'Asserts' },
  ];

    //Fails Chart//
    public mbarChartLabelsFails: string[] = [];
    public barChartDataFails: any[] = [
      { data: [], label: 'Fails' },
    ];
  
    ngOnInit(): void {
      this.statsService.getStats().subscribe((data:any) => {
        console.log(data);
        this.user = data.user;
        this.playedArtists = data.playedArtists;
        this.playedTracks = data.playedTracks;
        this.fails = data.fails;
        this.asserts = data.asserts;
      });
      this.asserts.forEach(element => {
        this.mbarChartLabelsAsserts.push(element.word);
        this.barChartDataAsserts[0].data.push(element.times.toString());
      });
  
      this.fails.forEach(element => {
        this.mbarChartLabelsFails.push(element.word);
        this.barChartDataFails[0].data.push(element.times.toString());
      });
  
    }
  
    ////////////////////////////General Config Chart/////////////////////////
    public barChartType = 'bar' as const;
    public barChartLegend: boolean = true;
    public barChartOptions: any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public chartClicked(e: any): void {
      //console.log(e);
    }
    public chartHovered(e: any): void {
      //console.log(e);
    }
    ////////////////////////////Fails Bar Chart Colors///////////////////////////////
    public barChartColorsFails: Array<any> = [
      {
        backgroundColor: 'rgba(255, 107, 87, 0.8)',
        borderColor: 'rgba(105,159,177,1)',
        pointBackgroundColor: 'rgba(105,159,177,1)',
        pointBorderColor: '#fafafa',
        pointHoverBackgroundColor: '#fafafa',
        pointHoverBorderColor: 'rgba(105,159,177)'
      },
    ];
  
    ////////////////////////////Asserts Bar Chart Colors///////////////////////////////
    public barChartColorsAsserts: Array<any> = [
      {
        backgroundColor: 'rgba(123, 249, 127, 0.8)',
        borderColor: 'rgba(105,159,177,1)',
        pointBackgroundColor: 'rgba(105,159,177,1)',
        pointBorderColor: '#fafafa',
        pointHoverBackgroundColor: '#fafafa',
        pointHoverBorderColor: 'rgba(105,159,177)'
      },
    ];
    
}
