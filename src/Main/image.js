/*
0:
.tag: "file"
client_modified: "2018-12-10T22:46:10Z"
id: "id:bF0UIWdpidUAAAAAAAMVfg"
link_permissions: {resolved_visibility: {…}, requested_visibility: {…}, can_revoke: true, visibility_policies: Array(3), can_set_expiry: true, …}
name: "tumblr_nxndikHZJ51tg5e8po10_400.gif"
path_lower: "/private/pr0n/tumblr_nxndikhzj51tg5e8po10_400.gif"
preview_type: "photo"
rev: "5a177d548fde60799e058"
server_modified: "2020-03-22T21:02:15Z"
size: 1694102
url: "https://www.dropbox.com/s/3tcmwaxctle2ee3/tumblr_nxndikHZJ51tg5e8po10_400.gif?dl=0"
__proto__: Object

1:
.tag: "folder"
id: "id:bF0UIWdpidUAAAAAAACSmQ"
link_permissions: {resolved_visibility: {…}, requested_visibility: {…}, can_revoke: true, visibility_policies: Array(3), can_set_expiry: true, …}
name: "pr0n"
path_lower: "/private/pr0n"
url: "https://www.dropbox.com/s
*/

export class Image 
{		
	constructor(_file)
	{
		this.id = _file.id;		
		this.isReady = false;
	}
	
	PropMetaData(data)
	{
		console.log("PropMetaData");
		this.fullLink = data[0].url		
		this.showLink = data[0].url.replace('?dl=0','');		
		console.log(this.showLink);
		this.name = data[0].name;
		this.path = data[0].path_lower;
		this.size = data[0].size;
		this.folder = data[1].name;
		
		const re = /(?:\.([^.]+))?$/;
		this.type = re.exec(this.name)[0];		
		
		this.isReady = true;
	}
}