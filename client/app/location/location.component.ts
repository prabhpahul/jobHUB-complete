import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input('group')

public addressForm: FormGroup;

selectProvince:string
selectedprovinceCities:any

data:Array<any> = 
  [
    {"province":'Alberta', "cities": ['Banff','Brooks','Calgary','Edmonton','Fort McMurray','Grande Prairie','Jasper','Lake Louise','Lethbridge','Medicine Hat','Red Deer','Saint Albert']},								
    {"province":'British Columbia', "cities": ['Barkerville','Burnaby','Campbell River','Chilliwack','Courtenay','Cranbrook','Dawson Creek','Delta','Esquimalt','Fort Saint James','Fort Saint John','Hope','Kamloops','Kelowna','Kimberley','Kitimat','Langley','Nanaimo','Nelson','New Westminster','North Vancouver','Oak Bay','Penticton','Powell River','Prince George','Prince Rupert','Quesnel','Revelstoke','Rossland','Trail','Vancouver','Vernon','Victoria','West Vancouver','White Rock']},
    {"province":'Manitoba', "cities": ['Brandon','Churchill','Dauphin','Flin Flon','Kildonan','Saint Boniface','Swan River','Thompson','Winnipeg','York Factory']},
    {"province":'New Brunswick', "cities": ['Bathurst','Caraquet','Dalhousie','Fredericton','Miramichi','Moncton','Saint John']},
    {"province":'Newfoundland and Labrador', "cities": ['Argentia','Bonavista','Channel-Port aux Basques','Corner Brook','Ferryland','Gander','Grand Falls–Windsor','Happy Valley–Goose Bay','Harbour Grace','Labrador City','Placentia','Saint Anthony','St. 	John’s','Wabana']},
    {"province":'Northwest Territories', "cities": ['Fort Smith','Hay River','Inuvik','Tuktoyaktuk','Yellowknife']},
    {"province":'Nova Scotia', "cities": ['Baddeck','Digby','Glace Bay','Halifax','Liverpool','Louisbourg','Lunenburg','Pictou','Port 	Hawkesbury','Springhill','Sydney','Yarmouth']},
    {"province":'Nunavut', "cities": ['Iqaluit']},
    {"province":'Ontario', "cities": ['Bancroft','Barrie','Belleville','Brampton','Brantford','Brockville','Burlington','Cambridge','Chatham',									'Chatham-Kent','Cornwall','Elliot Lake','Etobicoke','Fort Erie','Fort 		Frances','Gananoque','Guelph','Hamilton','Iroquois Falls','Kapuskasing','Kawartha Lakes','Kenora','Kingston','Kirkland 	Lake','Kitchener','Laurentian Hills','London','Midland','Mississauga','Moose Factory','Moosonee','Niagara Falls','Niagara-on-the-Lake','North Bay','North York','Oakville','Orillia','Oshawa','Ottawa','Parry Sound','Perth','Peterborough','Picton','Port Colborne','Saint Catharines','Saint Thomas','Sarnia-Clearwater','Sault Sainte Marie','Scarborough','Simcoe','Stratford','Sudbury','Temiskaming Shores','Thorold','Thunder 	Bay','Timmins','Toronto','Trenton','Waterloo','Welland','West Nipissing','Windsor','Woodstock','York']},
    {"province":'Prince Edward Island', "cities": ['Borden','Cavendish','Charlottetown','Souris','Summerside']},
    {"province":'Quebec', "cities": ['Asbestos','Baie-Comeau','Beloeil','Cap-de-la-Madeleine','Chambly','Charlesbourg','Châteauguay','Chibougamau','Côte-Saint-Luc','Dorval','Gaspé','Gatineau','Granby','Havre-Saint-Pierre','Hull','Jonquière','Kuujjuaq','La Salle','La Tuque','Lachine','Laval','Lévis','Longueuil','Magog','Matane','Montreal','Montréal-Nord','Percé','Port-Cartier','Quebec','Rimouski','Rouyn-Noranda','Saguenay','Saint-Eustache','Saint-Hubert','Sainte-Anne-de-Beaupré','Sainte-Foy','Sainte-Thérèse','Sept-Îles','Sherbrooke','Sorel-Tracy','Trois-Rivières','Val-d’Or','Waskaganish']},
    {"province":'Saskatchewan', "cities": ['Batoche','Cumberland House','Estevan','Flin Flon','Moose Jaw','Prince Albert','Regina','Saskatoon','Uranium City']},
    {"province":'Yukon', "cities": ['Dawson','Watson Lake','Whitehorse']}
   
  ];


  ngOnInit() {
  }

 
  constructor() {
  }

  
  populateCities() {
    this.selectedprovinceCities = this.data.find((e) => e.province == this.selectProvince);
  }
}
