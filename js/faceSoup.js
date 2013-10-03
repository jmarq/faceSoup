 var renderer = new PIXI.autoDetectRenderer(800, 600); 

    document.body.appendChild(renderer.view);

    var stage = new PIXI.Stage(0xffffff);

    faceTextures=[ PIXI.Texture.fromImage("faceParts/nose_1.png"),PIXI.Texture.fromImage("faceParts/eye_1.png"),PIXI.Texture.fromImage("faceParts/eye_2.png"),PIXI.Texture.fromImage("faceParts/mouth_1.png")];
    
    eyeTextures=new Array();
    noseTextures=new Array();
    mouthTextures=new Array();
    
    for(eye in eyePaths){
      eyeTextures.push(PIXI.Texture.fromImage(eyePaths[eye]));
    }   
    for( nose in nosePaths){
      noseTextures.push(PIXI.Texture.fromImage(nosePaths[nose]));
    }
    for( mouth in mouthPaths){
      mouthTextures.push(PIXI.Texture.fromImage(mouthPaths[mouth]));
    }

    var faceParts={};
    eyeCounter=0;
    numEyes=eyePaths.length;
    noseCounter=0;
    numNoses=nosePaths.length;
    mouthCounter=0;
    numMouths=mouthPaths.length;
    for(var i=0; i<800; i+=1){
        if(i%4==0){
	  faceParts[i]=new PIXI.Sprite(eyeTextures[eyeCounter%numEyes]);
          eyeCounter+=1;
	}//eye1
        else if(i%4==1){
	  faceParts[i]=new PIXI.Sprite(eyeTextures[eyeCounter%numEyes]);
          eyeCounter+=1;
	}//eye2
        else if(i%4==2){
          faceParts[i]=new PIXI.Sprite(noseTextures[noseCounter%numNoses]);
	  noseCounter+=1;
	}//nose
        else if(i%4==3){
	  faceParts[i]=new PIXI.Sprite(mouthTextures[mouthCounter%numMouths]);
	  mouthCounter+=1;
	}//mouth
         faceParts[i].position.x=Math.random()*800;
        faceParts[i].position.y=Math.random()*600;
        faceParts[i].scale.x=Math.random()+0.25;
        if(Math.random()>=0.5){faceParts[i].scale.x*=-1;}
        faceParts[i].scale.y=Math.random()+0.25;
        faceParts[i].speedo=Math.random()*0.05+0.1;
        
        stage.addChild(faceParts[i]);
        }
        console.log(faceParts);
   // bunny.position.x = 400;
   // bunny.position.y = 300;

    //bunny.scale.x = 2;
   // bunny.scale.y = 2;

    //stage.addChild(bunny);

    requestAnimationFrame(animate);
    function animate() {
        for(var j=0;j<800;j+=1){
          faceParts[j].position.x+=Math.random()*5-2.5;
          faceParts[j].position.y+=Math.random()*5-2.5;
          faceParts[j].rotation+=Math.random()*0.01-0.005;
          faceParts[j].scale.x+=Math.random()*0.01-0.005;
          faceParts[j].scale.y+=Math.random()*0.01-0.005;

        }
        renderer.render(stage);

        requestAnimationFrame(animate);
    }

