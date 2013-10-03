import os
import json

je=json.JSONEncoder();


noseImages=os.listdir("noses");
for i in range(0, len(noseImages)):
  noseImages[i]="faceParts/noses/"+noseImages[i];
noseArrayString=je.encode(noseImages);
noseExpression="nosePaths = "+noseArrayString+";";
print noseExpression;
noseFile="./../js/partsNoses.js";
noseFile=open(noseFile,'w');
noseFile.write(noseExpression);
noseFile.close();

eyeImages=os.listdir("eyes");
for i in range(0, len(eyeImages)):
  eyeImages[i]="faceParts/eyes/"+eyeImages[i];

eyeArrayString=je.encode(eyeImages);
eyeExpression="eyePaths = "+eyeArrayString+";";
print eyeExpression;
eyeFile="./../js/partsEyes.js";
eyeFile=open(eyeFile,'w');
eyeFile.write(eyeExpression);
eyeFile.close();


mouthImages=os.listdir("mouths");
for i in range(0, len(mouthImages)):
  mouthImages[i]="faceParts/mouths/"+mouthImages[i];
mouthArrayString=je.encode(mouthImages);
mouthExpression="mouthPaths = "+mouthArrayString+";";
print mouthExpression;
mouthFile="./../js/partsMouths.js";
mouthFile=open(mouthFile,'w');
mouthFile.write(mouthExpression);
mouthFile.close();

