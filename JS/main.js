'use strict'
{
  // 大地域選択メニュー
  const asia=document.getElementById('asia');
  const asian=document.querySelector('.asia');
  const europe=document.getElementById('europe');
  const european=document.querySelector('.europe');
  const north=document.getElementById('northAmerica');
  const namerica=document.querySelector('.northAmerica');
  const south=document.getElementById('southAmerica');
  const samerica=document.querySelector('.southAmerica');
  const africa=document.getElementById('africa');
  const african=document.querySelector('.africa');
  const oceania=document.getElementById('oceania');
  const oceanian=document.querySelector('.oceania');
  asia.addEventListener('click',()=>{
    asian.classList.add('appear');
  })
  asian.addEventListener('dblclick',()=>{
    asian.classList.remove('appear');
  });
  europe.addEventListener('click',()=>{
    european.classList.add('appear');
  })
  european.addEventListener('dblclick',()=>{
    european.classList.remove('appear');
  });
  north.addEventListener('click',()=>{
    namerica.classList.add('appear');
  })
  namerica.addEventListener('dblclick',()=>{
    namerica.classList.remove('appear');
  });
  south.addEventListener('click',()=>{
    samerica.classList.add('appear');
  })
  samerica.addEventListener('dblclick',()=>{
    samerica.classList.remove('appear');
  });
  africa.addEventListener('click',()=>{
    african.classList.add('appear');
  });
  african.addEventListener('dblclick',()=>{
    african.classList.remove('appear');
  });
  oceania.addEventListener('click',()=>{
    oceanian.classList.add('appear');
  });
  oceanian.addEventListener('dblclick',()=>{
    oceanian.classList.remove('appear');
  });
}

{
  // 小地域選択メニュー
  const area=[['ハルビン','長春','潘陽','大連'],['北京','天津','大同'],['西安','洛陽'],['青島','連雲港'],['南京','揚州','泰州','塩城','安徽省'],['上海','蘇州','無錫','杭州'],['厦門','景徳鎮','武漢'],['広州','海南島'],['張家界','桂林'],['重慶','四川省'],['雲南省'],['銀川','蘭州','西寧'],['ラサ','西チベット'],['敦煌','トルファン','ウルムチ'],['内モンゴル']]
  const sightseeingSpot=[[['ハルビン氷祭り','中央大街','聖ソフィア大聖堂','東北虎林園'],['偽満皇宮博物館'],['瀋陽故宮博物院'],['星海広場','中山広場','旧ロシア人街','ザ キャッスル ホテル ラグジュアリー コレクション ホテル 大連']],[['天安門広場','王府井','天壇公園','頤和園','紫禁城','万里の長城','景山公園','北京動物園','明の十三陵','古北水鎮'],['天津之眼摩天輪','黄崖関長城','五大道'],['雲崗石窟','懸空寺']],[['兵馬俑','西安鐘楼','華清池','大雁塔'],['龍門石窟','白馬寺']],[['青島ビール博物館','青島桟橋','五四広場'],['花果山']],[['玄武湖','牛首山','老門東','明孝陵'],['大明寺','揚州個園'],['興化千垛景区'],['中華麋鹿園','東台条子泥景区','水街'],['黄山','宏村']],[['豫園','南京路','新天地','外灘','浦東','玉仏寺','魯迅公園','田子坊','上海ディズニーランド','枸杞島'],['拙政園','留園','虎丘塔','寒山寺','金鶏湖','平江路','山塘街'],['太湖','三国城'],['西湖']],[['福建土楼','コロンス島'],['景徳鎮'],['黄鶴楼']],[['陳氏書院','白雲山','沙面島','広州タワー','深圳'],['海南島']],[['武陵源','天門洞','張家界大峡谷','鳳凰古城'],['漓江下り','独秀峰','盧笛岩']],[['三峡クルーズ','大足石刻','重慶万盛奥陶紀'],['九塞溝','黄龍','楽山大仏','峨眉山','成都パンダ繁殖研究基地','武候祠','杜甫草堂']],[['白水台','シャングリラ','ナパ海','石林','羅平の菜の花畑','雲南民俗村']],[['西夏王陵','賀蘭山岩画'],['中山橋','炳霊寺石窟','張掖丹霞国家地質公園'],['タール寺','チャカ塩湖','青蔵鉄道']],[['ポタラ宮','ノルブリンカ','ヤムドク湖','ラルンガルゴンパ'],['カイラス山','グゲ王国遺跡']],[['鳴砂山・月牙泉','莫高窟'],['カレーズ博物館','火焔山','高昌故城','アスターナ古墳'],['天池','新彊国際バザール']],[['草原と遊牧民','満州里','オルドス']]]
  const ul=document.querySelector('nav ul')
  const Li=document.querySelectorAll('aside ul li');
  const topDesc=document.getElementById('topdesc')

  Li.forEach((list,index) =>{
    list.addEventListener('click',()=>{
      while(ul.firstChild){
        ul.removeChild(ul.firstChild)
      }
      for(let i=0;i<sightseeingSpot[index].length;i++){
        const h3=document.createElement('h3');
        h3.textContent=area[index][i];
        ul.appendChild(h3);
        for(let j=0;j<sightseeingSpot[index][i].length;j++){
          const li=document.createElement('li');
          const a=document.createElement('a');
          a.setAttribute('href','#'+sightseeingSpot[index][i][j])
          a.textContent=sightseeingSpot[index][i][j];
         ul.appendChild(li);
         li.appendChild(a);
        }
      }
      img.src=map[index];
      img2.src=map[index];
      topDesc.classList.add('hidden');
      document.querySelectorAll('main>div').forEach((div,num) =>{
        div.classList.remove('appear')
        if(num===index){div.classList.add('appear')}
      });
    });
  })


  Li.forEach((list,index) =>{
    list.addEventListener('dblclick',()=>{
      while(ul.firstChild){
        ul.removeChild(ul.firstChild)
      }
      img.src='img/china.png'
        img2.src='img/china.png'
        topDesc.classList.remove('hidden');
        document.querySelectorAll('main>div').forEach((div,num) =>{
          div.classList.remove('appear')
        });
    });
  })

const img=document.querySelector('main img')
const img2=document.querySelector('aside img')
const map=['img/northeastchina.png','img/beijing.png','img/xian.png','img/shandong.png','img/nanjing.png','img/shanghai.png','img/fujian.png','img/guangzhou.png','img/guilin.png','img/sichuan.png','img/yunnan.png','img/silkroad.png','img/tibet.png','img/uighur.png','img/inner-mongolia.png']

  Li.forEach((list,index) =>{
    list.addEventListener('mouseover',()=>{
      if(ul.hasChildNodes()===true)return;
      img.src=map[index]
      img2.src=map[index]
    })
  });
  
  Li.forEach((list,index) =>{
    list.addEventListener('mouseleave',()=>{
      if(ul.hasChildNodes()===true)return;
      img.src='img/china.png'
      img2.src='img/china.png'
    })
  });



}

