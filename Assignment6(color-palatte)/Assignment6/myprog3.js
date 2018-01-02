function colorPalette() {
	var myRow = '';

	for(var j=1; j<11; j++){
		myRow = myRow + '<tr>';
		var myCol = '';

		for(var i=1; i<11; i++){
			var r = (j+6)*(i+1)*2;
			var g = (j*j - j*2)+(i+3)*3;
			var b = (j*j)+(i+6)*4;
			
			if(r<0){r = r*(-1); }  
			if(g<0){g = g*(-1); }
			if(b<0){b = b*(-1); }

			if(r>15){r = r%15; }  
			if(g>15){g = g%15; }
			if(b>15){b = b%15; }

			if(r == 10){ r = 'a';	}
			if(r == 11){ r = 'b';	}
			if(r == 12){ r = 'c'; }
			if(r == 13){ r = 'd'; }
			if(r == 14){ r = 'e'; }
			if(r >= 15){ r = 'f'; }

			if(g == 10){ g = 'a';	}
			if(g == 11){ g = 'b';	}
			if(g == 12){ g = 'c'; }
			if(g == 13){ g = 'd'; }
			if(g == 14){ g = 'e'; }
			if(g >= 15){ g = 'f'; }

			if(b == 10){ b = 'a';	}
			if(b == 11){ b = 'b';	}
			if(b == 12){ b = 'c'; }
			if(b == 13){ b = 'd'; }
			if(b == 14){ b = 'e'; }
			if(b >= 15){ b = 'f'; }

			var color = '#' + r + r + g + g + b + b ; 
			myCol = myCol + '<td style="background: '+ color +'" class="tblCol">' + (i*j) + '</td>' ;
		}	// column loop


		myRow = myRow + myCol + '</tr>';

	}
	
		
	var myTbl1 = '<table>' +
								'<tbody>' ;


	var myTbl3	= '</tbody>'  +
							'</table>' ;

	var colorTable =  '<div class="colorTable">' +
											myTbl1 + myRow + myTbl3
									  '<div>';
	document.getElementById("box1").innerHTML = colorTable;
}