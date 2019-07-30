function calc() {

	first = document.friendship_form.name1.value.toUpperCase();
	first_length = document.friendship_form.name1.value.length;

	second = document.friendship_form.name2.value.toUpperCase();
	second_length = document.friendship_form.name2.value.length;

	var friendship_count1=0, friendship_count2=0, friendship_count=0 ;
	var count=0;

	for (Count=0; Count < first_length; Count++) {



	letter1=first.substring(Count,Count+1);

	if (letter1=='F') { friendship_count1+=2; continue;}
	if (letter1=='R') { friendship_count1+=2; continue;}
	if (letter1=='I') { friendship_count1+=2; continue;}
	if (letter1=='E') { friendship_count1+=2; continue;}
	if (letter1=='N') { friendship_count1+=2; continue;}
	if (letter1=='D') { friendship_count1+=2; continue;}
	if (letter1=='S') { friendship_count1+=2; continue;}
	if (letter1=='H') { friendship_count1+=2; continue;}
	if (letter1=='I') { friendship_count1+=2; continue;}
	if (letter1=='P') { friendship_count1+=2; continue;}
	}
	document.friendship_form.output1.value=friendship_count1 ;

	for (Count=0; Count < second_length; Count++) {

	letter2=second.substring(Count,Count+1);

	if (letter2=='F') { friendship_count2+=2; continue;}
	if (letter2=='R') { friendship_count2+=2; continue;}
	if (letter2=='I') { friendship_count2+=2; continue;}
	if (letter2=='E') { friendship_count2+=2; continue;}
	if (letter2=='N') { friendship_count2+=2; continue;}
	if (letter2=='D') { friendship_count2+=2; continue;}
	if (letter2=='S') { friendship_count2+=2; continue;}
	if (letter2=='H') { friendship_count2+=2; continue;}
	if (letter2=='I') { friendship_count2+=2; continue;}
	if (letter2=='P') { friendship_count2+=2; continue;}
	}
	document.friendship_form.output2.value=friendship_count2 ;

	friendship_count=friendship_count1 + friendship_count2  ;

	var percentage=0;


	if ((friendship_count>= 0)  && (friendship_count<8))  percentage= 40-((first_length+second_length)/2);
	if ((friendship_count>= 8)  && (friendship_count<16)) percentage= 55-((first_length+second_length)/2);
	if ((friendship_count>= 16) && (friendship_count<24)) percentage= 70-((first_length+second_length)/2);
	if ((friendship_count== 24) && (friendship_count<32)) percentage= 85-((first_length+second_length)/2);
	if ((friendship_count>= 32) && (friendship_count<40)) percentage= 90-((first_length+second_length)/2);
	if ((friendship_count>= 40) && (friendship_count<48)) percentage= 105-((first_length+second_length)/2);
	if (friendship_count>= 48) percentage= 112-((first_length+second_length)/2);


	if (first_length==0 || second_length==0) percentage= "Error";

	document.friendship_form.output.value=percentage+"%";

}