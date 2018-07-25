$(document).ready(()=>{
	$("form").on("submit", ()=>{
		let item  = $("form input");
		let todo= { item: item.val() };
		$.ajax({
			type:"post",
			url:"/todo",
			data:todo,
			success: (data)=>{
				location.reload;
			}
		});
	});
});
