var V = V || {};

V = {
	INIT_STATE: {
	        greetings: 'This is Vaibhav Kaul\'s homepage, type help to begin',
	        name: 'main_term',
	        prompt: '~ '
	},
	CMDS: [
		"resume", 
		"work", 
		"school",
		"hire"
	],
	CMD_MAP: {
		"resume": function(term) {
			V.styled_echo(term, "<a href=\"files/vaibhavkaul.pdf\" target=\"blank\">Download</a>");
		},
		"help": function(term) {
			V.styled_echo(term, V.CMDS.join("&nbsp&nbsp&nbsp&nbsp"));
		},
		"work": function(term) {
			V.styled_echo(term, "I work at <a href=\"https://www.seatgeek.com\" target=\"blank\">SeatGeek</a> as a Senior Web engineer. My work involves things that help us make money. #TheMoneyTeam");
		},
		"school": function(term) {
			V.styled_echo(term, "I went to grad school at <a href=\"http://cims.nyu.edu/\" target=\"blank\">NYU</a>. I have an MS in Computer Science. Type \"resume\" to see course work");
		},
		"hire": function(term) {
			V.styled_echo(term, "I might be open to good roles. Contact me privately by <a href=\"http://goo.gl/0m83l9\" target=\"blank\">clicking here</a>.");	
		},
		"hello": function(term) {
			V.styled_echo(term, "Hello there!!!");	
		},
		"hi": function(term) {
			V.styled_echo(term, "Hi there!!!");	
		}
	},
	styled_echo: function(term, content) {
		term.echo("<div class=\"term-output\">"+content+"</div>", {"raw": true});
	},
	init: function() {
		this.initTerminal()
		this.animateCursor()
	},
	initTerminal: function() {
		$('#main-term').terminal(this.commandProcessor, this.INIT_STATE);
	},
	animateCursor: function() {
		setInterval (function() {
	    	$('.cursor').animate({
		        opacity: 0
		    }, 'fast', 'swing').animate({
		        opacity: 1
		    }, 'fast', 'swing');
	    }, 600);
	},
	commandProcessor: function(command, term) {
		if (V.CMD_MAP[command] !== undefined) {
			V.CMD_MAP[command](term);
		} else {
    		term.error("Sorry, I dont understand that command.")
    	}
    }
}

$(document).ready(function(){
	V.init();			    
});