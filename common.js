/**
 *
 * Zoteroプロジェクト用。
 *
 */

function main() {

	var entire_data = $('#data_in_csv').val();

	if (entire_data == '') {

		pos_Manual_Tags = -1;

		pos_Publication_Year = -1;
		pos_Author = -1;
		pos_Title = -1;
		pos_Publication_Title = -1;
		pos_DOI = -1;
		pos_URL = -1;
		pos_Pages = -1;
		pos_Volume = -1;
		pos_Journal_Abbreviation = -1;
		pos_Extra = -1;

		$('#proc_02').hide();
		$('#error').html('');

	} else {

		$('#proc_02').show();

	}

	var records = entire_data.split('\n');

	// console.log(records.length);

	var columns = records[0].split('\t');

	// console.log(columns);

	for (var i = 0; i < columns.length; i++) {

		if (columns[i] == 'Manual Tags') {

			pos_Manual_Tags = i;

		}

		switch (columns[i]) {

		case 'Manual Tags':

			pos_Manual_Tags = i;

			break;

		// ///////////////////////////

		case 'Publication Year':

			pos_Publication_Year = i;

			break;

		case 'Author':

			pos_Author = i;

			break;

		case 'Title':

			pos_Title = i;

			break;

		case 'Publication Title':

			pos_Publication_Title = i;

			break;

		case 'DOI':

			pos_DOI = i;

			break;

		case 'URL':

			pos_URL = i;

			break;

		case 'Pages':

			pos_Pages = i;

			break;

		case 'Volume':

			pos_Volume = i;

			break;

		case 'Journal Abbreviation':

			pos_Journal_Abbreviation = i;

			break;

		case 'Extra':

			pos_Extra = i;

			break;

		}

	}

	if (pos_Manual_Tags >= 0) {

		// console.log(pos_Manual_Tags);

		Manual_Tags = [];

		Publication_Year = [];
		Author = [];
		Title = [];
		Publication_Title = [];
		DOI = [];
		Url = [];
		Pages = [];
		Volume = [];
		Journal_Abbreviation = [];
		Extra = [];

		for (var i = 1; i < records.length; i++) {

			var columns = records[i].split('\t');

			Manual_Tags.push(columns[pos_Manual_Tags]);

			Publication_Year.push(columns[pos_Manual_Tags]);
			Author.push(columns[pos_Author]);
			Title.push(columns[pos_Title]);
			Publication_Title.push(columns[pos_Publication_Title]);
			DOI.push(columns[pos_DOI]);
			Url.push(columns[pos_URL]);
			Pages.push(columns[pos_Pages]);
			Volume.push(columns[pos_Volume]);
			Journal_Abbreviation.push(columns[pos_Journal_Abbreviation]);
			Extra.push(columns[pos_Extra]);

		}

		show_01 = $('#show_01').prop('checked');
		show_02 = $('#show_02').prop('checked');
		show_03 = $('#show_03').prop('checked');
		show_04 = $('#show_04').prop('checked');
		show_05 = $('#show_05').prop('checked');
		show_06 = $('#show_06').prop('checked');
		show_07 = $('#show_07').prop('checked');
		show_08 = $('#show_08').prop('checked');
		show_09 = $('#show_09').prop('checked');
		show_10 = $('#show_09').prop('checked');

		bold_01 = $('#bold_01').prop('checked');
		bold_02 = $('#bold_02').prop('checked');
		bold_03 = $('#bold_03').prop('checked');
		bold_04 = $('#bold_04').prop('checked');
		bold_05 = $('#bold_05').prop('checked');
		bold_06 = $('#bold_06').prop('checked');
		bold_07 = $('#bold_07').prop('checked');
		bold_08 = $('#bold_08').prop('checked');
		bold_09 = $('#bold_09').prop('checked');
		bold_10 = $('#bold_09').prop('checked');

		italic_01 = $('#italic_01').prop('checked');
		italic_02 = $('#italic_02').prop('checked');
		italic_03 = $('#italic_03').prop('checked');
		italic_04 = $('#italic_04').prop('checked');
		italic_05 = $('#italic_05').prop('checked');
		italic_06 = $('#italic_06').prop('checked');
		italic_07 = $('#italic_07').prop('checked');
		italic_08 = $('#italic_08').prop('checked');
		italic_09 = $('#italic_09').prop('checked');
		italic_10 = $('#italic_09').prop('checked');

		underline_01 = $('#underline_01').prop('checked');
		underline_02 = $('#underline_02').prop('checked');
		underline_03 = $('#underline_03').prop('checked');
		underline_04 = $('#underline_04').prop('checked');
		underline_05 = $('#underline_05').prop('checked');
		underline_06 = $('#underline_06').prop('checked');
		underline_07 = $('#underline_07').prop('checked');
		underline_08 = $('#underline_08').prop('checked');
		underline_09 = $('#underline_09').prop('checked');
		underline_10 = $('#underline_09').prop('checked');

		prefix_01 = $('[name="prefix_01"]').val();
		prefix_02 = $('[name="prefix_02"]').val();
		prefix_03 = $('[name="prefix_03"]').val();
		prefix_04 = $('[name="prefix_04"]').val();
		prefix_05 = $('[name="prefix_05"]').val();
		prefix_06 = $('[name="prefix_06"]').val();
		prefix_07 = $('[name="prefix_07"]').val();
		prefix_08 = $('[name="prefix_08"]').val();
		prefix_09 = $('[name="prefix_09"]').val();
		prefix_10 = $('[name="prefix_09"]').val();

		suffix_01 = $('[name="suffix_01"]').val();
		suffix_02 = $('[name="suffix_02"]').val();
		suffix_03 = $('[name="suffix_03"]').val();
		suffix_04 = $('[name="suffix_04"]').val();
		suffix_05 = $('[name="suffix_05"]').val();
		suffix_06 = $('[name="suffix_06"]').val();
		suffix_07 = $('[name="suffix_07"]').val();
		suffix_08 = $('[name="suffix_08"]').val();
		suffix_09 = $('[name="suffix_09"]').val();
		suffix_10 = $('[name="suffix_09"]').val();

		delimiter_01 = $('[name="delimiter_01"]').val();
		delimiter_02 = $('[name="delimiter_02"]').val();
		delimiter_03 = $('[name="delimiter_03"]').val();
		delimiter_04 = $('[name="delimiter_04"]').val();
		delimiter_05 = $('[name="delimiter_05"]').val();
		delimiter_06 = $('[name="delimiter_06"]').val();
		delimiter_07 = $('[name="delimiter_07"]').val();
		delimiter_08 = $('[name="delimiter_08"]').val();
		delimiter_09 = $('[name="delimiter_09"]').val();
		delimiter_10 = $('[name="delimiter_09"]').val();

		// console.log(manual_tags.join('; '));

		let set_Manual_Tags = new Set(Manual_Tags.join('; ').split('; '));

		// console.log(set_Manual_Tags);

		var html_manual_tags = '';
		var no = 1;

		html_manual_tags += '<div>';
		html_manual_tags += '<label for="chk_tagall">';
		html_manual_tags += '<input type="checkbox" value="chk_tagall" id="chk_tagall"' + (chk_tagall ? ' checked="checked"' : '') + '>';
		html_manual_tags += 'すべてチェックする';
		html_manual_tags += '</label>';

		html_manual_tags += '</div>';

		html_manual_tags += '<div>';

		// このFor文だと、フォーマッターが働かないみたい。仕方なく別のFor文に変更。
		// for(let v of set_Manual_Tags.values()){

		let array_Manual_Tags = Array.from(set_Manual_Tags.values());

		// console.log(array_Manual_Tags);

		// $('[id^="chk_tags"]').each(function(index, element) {
		//
		// chk_tags[i] = $(this).prop('checked');
		// // console.log(chk_tags[i]);
		//
		// });
		//
		// console.log(chk_tags);

		var rm = 0;

		while (array_Manual_Tags[rm] !== '') {

			rm++;

		}

		// console.log(rm);

		array_Manual_Tags.splice(rm, 1);

		// array_Manual_Tags.forEach((item, index) => {
		//
		// if(item === '') {
		//
		// array_Manual_Tags.splice(index, 1);
		//
		// }
		//
		// });

		for (var i = 0; i < array_Manual_Tags.length; i++) {

			if (array_Manual_Tags[i] !== '') {

				html_manual_tags += '<label for="chk_tags_' + no + '">';
				html_manual_tags += '<input type="checkbox" value="chk_tags_' + no + '" id="chk_tags_' + no + '"' + (chk_tags[i] ? 'checked="checked"' : '') + '>';
				html_manual_tags += array_Manual_Tags[i];
				html_manual_tags += '</label>';

				no++;

			}

		}

		html_manual_tags += '</div>';

		$('#manual_tags').html(html_manual_tags);

		var html_final = '';

		{

			for (var i = 1; i < records.length; i++) {

				// console.log(i + '=' + Manual_Tags[i]);

				if (typeof Manual_Tags[i] !== 'undefined') {

					var _Manual_Tags = Manual_Tags[i].split('; ');

					// console.log(_Manual_Tags.length + 'length');
					//
					var class_name = 'reference';

					for (var j = 0; j < _Manual_Tags.length; j++) {

						// console.log(set_Manual_Tags.indexOf(_Manual_Tags[j]));

						class_name += '_' + (Array.from(set_Manual_Tags).indexOf(_Manual_Tags[j]) + 0) + '_';

					}

					html_final += '<div class="' + class_name + '">';

					for (var j = 0; j < alignment.length; j++) {

						html_final += generateAlignedReference(alignment[j], i);

					}

					html_final += '</div>';

					// html_final += '<div class="' + class_name + '">';
					// html_final += Author[i];
					// html_final += Title[i];
					// html_final += Publication_Title[i];
					// html_final += Volume[i];
					// html_final += Pages[i];
					// html_final += DOI[i];
					// html_final += '</div>';

				}

			}

		}

		$('#final').html(html_final);

		// visual effects

		$('[id^="show_"]').each(function(index, element) {

			if ($(this).prop('checked')) {

				// $(this).parent().parent().parent().find('td').css('background-color',
				// 'transparent');
				$(this).parent().parent().parent().addClass('essential');
				// $(this).parent().parent().parent().css('background-color',
				// 'yellow');

			} else {

				$(this).parent().parent().parent().removeClass('essential');

			}

		});

		var i = 0;

		$('[id^="chk_tags"]').each(function(index, element) {

			chk_tags[i] = $(this).prop('checked');
			i++;

		});

		$('[id^="chk_tag"]').each(function(index, element) {

			if ($(this).prop('checked')) {

				// $(this).parent().css('background-color', 'pink');
				$(this).parent().addClass('on');
				$(this).parent().removeClass('off');

			} else {

				// $(this).parent().css('background-color', 'initial');
				$(this).parent().removeClass('on');
				$(this).parent().addClass('off');

			}

		});

		var tno_show = 0;

		$('[class^="reference_"]').each(function(index, element) {

			var c_name = $(this).attr('class');
			var show = false;

			// console.log(c_name);

			for (var i = 0; i < chk_tags.length; i++) {

				if (chk_tags[i]) {

					if (c_name.indexOf('_' + (i + 1) + '_') >= 0) {

						show = true;

					}

				}

			}

			if (show) {

				$(this).removeClass('hide').addClass('show');
				tno_show++;

			} else {

				$(this).addClass('hide').removeClass('show');

			}

		});

		if ($('[class$="show"]').length == 0) {

			html_final = '<div class="SM_BIG">';
			html_final += '１件もレコードがありません。どれかタグを最低１個選択してください。';
			html_final += '</div>';

			$('#final').html(html_final);

		}

		$('#error').html('');

	} else {

		$('#proc_02').hide();

		var html_error = '';

		html_error = '<div class="SM_BIG">';
		html_error += '入力されたデータの中にmanual tagカラムが見当たりません。正しいデータフォーマットで入力されているか、確認してください。';
		html_error += '</div>';

		$('#error').html(html_error);

	}

}

$(function() {

	$(document).on('click', '#chk_tagall', function() {

		chk_tagall = $(this).prop('checked');

		if (chk_tagall) {

			$('[id^="chk_tags_"]').each(function(index, element) {

				$(this).prop('checked', true);

			});

			for (var i = 0; i < chk_tags.length; i++) {

				chk_tags[i] = true;

			}

			console.log(chk_tags);

		} else {

			$('[id^="chk_tags_"]').each(function(index, element) {

				$(this).prop('checked', false);

			});

			for (var i = 0; i < chk_tags.length; i++) {

				chk_tags[i] = false;

			}

		}

		main();

	});

	// $(document).on('click', '[id^="chk_tags_"]', function() {
	//
	// if ($(this).prop('checked')) {
	//
	// $(this).parent().css('background-color', 'pink');
	//
	// } else {
	//
	// $(this).parent().css('background-color', 'initial');
	//
	// }
	//
	// });

	$('#data_in_csv').on('keydown keyup keypress change', function() {

		main();

	});

	$(document).on('click', '[id^="show_"],[id^="bold_"],[id^="italic_"],[id^="underline_"]', function() {

		main();

	});

	$(document).on('keydown keyup keypress change', '[name^="suffix_"],[name^="bold_"],[name^="delimiter_"]', function() {

		main();

	});

	$(document).on('click', '[id^="chk_tags_"]', function() {

		var i = parseInt($(this).attr('id').split('_')[2]);

		if ($(this).prop('checked')) {

			chk_tags[i - 1] = true;

		} else {

			chk_tags[i - 1] = false;

		}

		// var i = 0;
		//
		// $('[id^="chk_tags"]').each(function(index, element) {
		//
		// chk_tags[i] = $(this).prop('checked');
		// i++;
		// // console.log(chk_tags[i]);
		// // console.log($(this).attr('id'));
		// // console.log(chk_tags);
		//
		// });

		console.log(chk_tags);

		main();

	});

	// $('#sortable-table tbody').sortable();

	$('#sortable-table tbody').sortable({
		update : function() {
			alignment = $(this).sortable("toArray");

			console.log(alignment);

			main();

		}

	});

});

function generateAlignedReference(tr_xx, i) {

	var ret = '';

	switch (tr_xx) {

	case 'tr_01':

		if (show_01) {

			ret += prefix_01 + Publication_Year[i] + suffix_01 + delimiter_01;

			if (bold_01) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_01) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_01) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_02':

		if (show_02) {

			ret += prefix_02 + Author[i] + suffix_02 + delimiter_02;

			if (bold_02) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_02) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_02) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_03':

		if (show_03) {

			ret += prefix_03 + Title[i] + suffix_03 + delimiter_03;

			if (bold_03) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_03) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_03) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_04':

		if (show_04) {

			ret += prefix_04 + Publication_Title[i] + suffix_04 + delimiter_04;

			if (bold_04) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_04) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_04) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_05':

		if (show_05) {

			ret += prefix_05 + DOI[i] + suffix_05 + delimiter_05;

			if (bold_05) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_05) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_05) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_06':

		if (show_06) {

			ret += prefix_06 + Url[i] + suffix_06 + delimiter_06;

			if (bold_06) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_06) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_06) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_07':

		if (show_07) {

			ret += prefix_06 + Pages[i] + suffix_07 + delimiter_07;

			if (bold_07) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_07) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_07) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_08':

		if (show_08) {

			ret += prefix_06 + Volume[i] + suffix_08 + delimiter_08;

			if (bold_08) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_08) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_08) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_09':

		if (show_09) {

			ret += prefix_06 + Journal_Abbreviation[i] + suffix_09 + delimiter_09;

			if (bold_09) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_09) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_09) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	case 'tr_10':

		if (show_10) {

			ret += prefix_06 + Extra[i] + suffix_10 + delimiter_10;

			if (bold_10) {

				ret = '<b>' + ret + '</b>';

			}

			if (italic_10) {

				ret = '<i>' + ret + '</i>';

			}

			if (underline_10) {

				ret = '<u>' + ret + '</u>';

			}

		}

		break;

	}

	return ret;

}

var alignment = [ "tr_01", "tr_02", "tr_03", "tr_04", "tr_05", "tr_06", "tr_07", "tr_08", "tr_09", "tr_10" ];

var pos_Manual_Tags = -1;

var pos_Publication_Year = -1;
var pos_Author = -1;
var pos_Title = -1;
var pos_Publication_Title = -1;
var pos_DOI = -1;
var pos_URL = -1;
var pos_Pages = -1;
var pos_Volume = -1;
var pos_Journal_Abbreviation = -1;
var pos_Extra = -1;

var show_01 = false;
var show_02 = false;
var show_03 = false;
var show_04 = false;
var show_05 = false;
var show_06 = false;
var show_07 = false;
var show_08 = false;
var show_09 = false;
var show_10 = false;

var bold_01 = false;
var bold_02 = false;
var bold_03 = false;
var bold_04 = false;
var bold_05 = false;
var bold_06 = false;
var bold_07 = false;
var bold_08 = false;
var bold_09 = false;
var bold_10 = false;

var italic_01 = false;
var italic_02 = false;
var italic_03 = false;
var italic_04 = false;
var italic_05 = false;
var italic_06 = false;
var italic_07 = false;
var italic_08 = false;
var italic_09 = false;
var italic_10 = false;

var underline_01 = false;
var underline_02 = false;
var underline_03 = false;
var underline_04 = false;
var underline_05 = false;
var underline_06 = false;
var underline_07 = false;
var underline_08 = false;
var underline_09 = false;
var underline_10 = false;

var prefix_01 = '';
var prefix_02 = '';
var prefix_03 = '';
var prefix_04 = '';
var prefix_05 = '';
var prefix_06 = '';
var prefix_07 = '';
var prefix_08 = '';
var prefix_09 = '';
var prefix_10 = '';

var suffix_01 = '';
var suffix_02 = '';
var suffix_03 = '';
var suffix_04 = '';
var suffix_05 = '';
var suffix_06 = '';
var suffix_07 = '';
var suffix_08 = '';
var suffix_09 = '';
var suffix_10 = '';

var delimiter_01 = '';
var delimiter_02 = '';
var delimiter_03 = '';
var delimiter_04 = '';
var delimiter_05 = '';
var delimiter_06 = '';
var delimiter_07 = '';
var delimiter_08 = '';
var delimiter_09 = '';
var delimiter_10 = '';

var chk_tagall = false;
var chk_tags = [];

var Key = [];
var Item_Type = [];
var Publication_Year = [];
var Author = [];
var Title = [];
var Publication_Title = [];
var ISBN = [];
var ISSN = [];
var DOI = [];
var Url = [];
var Abstract_Note = [];
var Date = [];
var Date_Added = [];
var Date_Modified = [];
var Access_Date = [];
var Pages = [];
var Num_Pages = [];
var Issue = [];
var Volume = [];
var Number_Of_Volumes = [];
var Journal_Abbreviation = [];
var Short_Title = [];
var Series = [];
var Series_Number = [];
var Series_Text = [];
var Series_Title = [];
var Publisher = [];
var Place = [];
var Language = [];
var Rights = [];
var Type = [];
var Archive = [];
var Archive_Location = [];
var Library_Catalog = [];
var Call_Number = [];
var Extra = [];
var Notes = [];
var File_Attachments = [];
var Link_Attachments = [];
var Manual_Tags = [];
var Automatic_Tags = [];
var Editor = [];
var Series_Editor = [];
var Translator = [];
var Contributor = [];
var Attorney_Agent = [];
var Book_Author = [];
var Cast_Member = [];
var Commenter = [];
var Composer = [];
var Cosponsor = [];
var Counsel = [];
var Interviewer = [];
var Producer = [];
var Recipient = [];
var Reviewed_Author = [];
var Scriptwriter = [];
var Words_By = [];
var Guest = [];
var Number = [];
var Edition = [];
var Running_Time = [];
var Scale = [];
var Medium = [];
var Artwork_Size = [];
var Filing_Date = [];
var Application_Number = [];
var Assignee = [];
var Issuing_Authority = [];
var Country = [];
var Meeting_Name = [];
var Conference_Name = [];
var Court = [];
var References = [];
var Reporter = [];
var Legal_Status = [];
var Priority_Numbers = [];
var Programming_Language = [];
var Version = [];
var System = [];
var Code = [];
var Code_Number = [];
var Section = [];
var Session = [];
var Committee = [];
var History = [];
var Legislative_Body = [];
