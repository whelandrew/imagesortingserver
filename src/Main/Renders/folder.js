export class Folder 
{		
	constructor(_file)
	{		
		this.id = _file.id;		
		this.isReady = false;
		
		this.name = _file.name;
		this.path = _file.path_lower;
		this.size = _file.size;		
		
		this.filePath = _file.preview_url;	
		
		const re = /(?:\.([^.]+))?$/;
		this.type = re.exec(this.name)[0];
		
		this.isReady = true;
	}
}