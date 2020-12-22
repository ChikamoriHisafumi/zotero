/**
 *
 * Zoteroプロジェクト用。
 *
 */

const __tr_01__ = 'tr_01';
const __tr_02__ = 'tr_02';
const __tr_03__ = 'tr_03';
const __tr_04__ = 'tr_04';
const __tr_05__ = 'tr_05';
const __tr_06__ = 'tr_06';
const __tr_07__ = 'tr_07';
const __tr_08__ = 'tr_08';
const __tr_09__ = 'tr_09';
const __tr_10__ = 'tr_10';
const __tr_11__ = 'tr_11';
const __tr_12__ = 'tr_12';

// 配列ゼロ番目用。コンソールからコピペするとき用
const empty = null;

var alignment = [__tr_01__, __tr_02__, __tr_03__, __tr_04__, __tr_05__, __tr_06__, __tr_07__, __tr_08__, __tr_09__, __tr_10__, __tr_11__, __tr_12__];

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
		pos_Date = -1;
		pos_Pages = -1;
		pos_Issue = -1;
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

			case 'Date':

				pos_Date = i;

				break;

			case 'Pages':

				pos_Pages = i;

				break;

			case 'Issue':

				pos_Issue = i;

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
		Date = [];
		Pages = [];
		Issue = [];
		Volume = [];
		Journal_Abbreviation = [];
		Extra = [];

		for (var i = 1; i < records.length; i++) {

			var columns = records[i].split('\t');

			Manual_Tags.push(columns[pos_Manual_Tags]);

			Publication_Year.push(columns[pos_Publication_Year]);
			Title.push(columns[pos_Title]);
			Publication_Title.push(columns[pos_Publication_Title]);
			DOI.push(columns[pos_DOI]);
			Url.push(columns[pos_URL]);

			if (chk_yyyymmdd) {

				if (typeof columns[pos_Date] != 'undefined') {

					if (columns[pos_Date].indexOf('/') >= 0) {

						// console.log(i);
						// console.log(columns[pos_Date]);
						Date.push(columns[pos_Date].split('/').join('.'));

					} else {

						Date.push(columns[pos_Date]);

					}

				}

			} else {

				Date.push(columns[pos_Date]);

			}

			Pages.push(columns[pos_Pages]);
			Issue.push(columns[pos_Issue]);
			Volume.push(columns[pos_Volume]);
			Journal_Abbreviation.push(columns[pos_Journal_Abbreviation]);
			Extra.push(columns[pos_Extra]);

			if (chk_initial) {

				// if (/\x20[A-Z]+\./.test(temp_author)) {
				var temp_author = columns[pos_Author];

				if (/(.*);(.*)/.test(temp_author)) {

					var _temp_author = temp_author.split(';');

					for (var k = 0; k < _temp_author.length; k++) {

						var __temp_author = _temp_author[k].split(', ')

						for (var l = 1; l < __temp_author.length; l++) {

							// console.log(__temp_author[l].substr(0, 1));
							__temp_author[l] = __temp_author[l].substr(0, 1) + '.';

						}

						_temp_author[k] = __temp_author[0];

						__temp_author.shift();

						_temp_author[k] = _temp_author[k] + ' ' + __temp_author.join('');

					}

					Author.push('<span style="color: red;">' + _temp_author.join(',') + '</span>');

				} else {

					Author.push(columns[pos_Author]);
					// Author.push('aaaaaaaaaaaaaaaaaaaa');

				}

			} else {

				Author.push(columns[pos_Author]);

			}

		}

		$('[id^="show_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			show[tr_num] = $(this).prop('checked');

		});

		$('[id^="bold_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			bold[tr_num] = $(this).prop('checked');

		});

		$('[id^="italic_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			italic[tr_num] = $(this).prop('checked');

		});

		$('[id^="underline_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			underline[tr_num] = $(this).prop('checked');

		});

		$('[name^="prefix_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('name').split('_')[1]);
			prefix[tr_num] = $(this).val();

		});

		$('[name^="suffix_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('name').split('_')[1]);
			suffix[tr_num] = $(this).val();

		});

		$('[name^="delimiter_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('name').split('_')[1]);
			delimiter[tr_num] = $(this).val();

		});

		let set_Manual_Tags = new Set(Manual_Tags.join('; ').split('; '));

		// console.log(set_Manual_Tags);

		var html_manual_tags = '';
		var no = 0;

		html_manual_tags += '<div>';
		html_manual_tags += '<label for="chk_underbar">';
		html_manual_tags += '<input type="checkbox" value="chk_underbar" id="chk_underbar"' + (chk_underbar ? ' checked="checked"' : '') + '>';
		html_manual_tags += 'アンダーバーで始まるタグ以外も表示する';
		html_manual_tags += '</label>';
		html_manual_tags += '</div>';

		html_manual_tags += '<div>';
		html_manual_tags += '<label for="chk_initial">';
		html_manual_tags += '<input type="checkbox" value="chk_initial" id="chk_initial"' + (chk_initial ? ' checked="checked"' : '') + '>';
		html_manual_tags += 'ファーストネーム、ミドルネームをイニシャル表記にする';
		html_manual_tags += '</label>';
		html_manual_tags += '</div>';

		html_manual_tags += '<div>';
		html_manual_tags += '<label for="chk_yyyymmdd">';
		html_manual_tags += '<input type="checkbox" value="chk_yyyymmdd" id="chk_yyyymmdd"' + (chk_yyyymmdd ? ' checked="checked"' : '') + '>';
		html_manual_tags += '日付を「YYYY.mm.dd」フォーマットにする';
		html_manual_tags += '</label>';
		html_manual_tags += '</div>';

		html_manual_tags += '<div>';
		html_manual_tags += '<label for="chk_and_or">';
		html_manual_tags += '<input type="checkbox" value="chk_and_or" id="chk_and_or"' + (chk_and_or ? ' checked="checked"' : '') + '>';
		html_manual_tags += 'タグをAND検索にする（チェックなしの場合はOR検索になります）';
		html_manual_tags += '</label>';
		html_manual_tags += '</div>';

		html_manual_tags += '<div>';
		html_manual_tags += '<label for="chk_tagall">';
		html_manual_tags += '<input type="checkbox" value="chk_tagall" id="chk_tagall"' + (chk_tagall ? ' checked="checked"' : '') + '>';
		html_manual_tags += 'すべてチェックする';
		html_manual_tags += '</label>';

		html_manual_tags += '</div>';

		html_manual_tags += '<div>';

		// このFor文だと、フォーマッターが働かないみたい。仕方なく別のFor文に変更。
		// for(let v of set_Manual_Tags.values()){

		var array_Manual_Tags = array_Manual_Tags = Array.from(set_Manual_Tags.values()).sort();

		if (!chk_underbar) {

			// array_Manual_Tags = Array.from(set_Manual_Tags.values()).sort();
			//
			// } else {

			var tmp_Manual_Tags = [];

			for (var j = 0; j < array_Manual_Tags.length; j++) {

				if (array_Manual_Tags[j].startsWith('_')) {

					tmp_Manual_Tags.push(array_Manual_Tags[j]);

				}

			}

			array_Manual_Tags = tmp_Manual_Tags;

		}

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

		if (array_Manual_Tags.length != 0) {

			while (array_Manual_Tags[rm] !== '') {

				rm++;

				if (rm == array_Manual_Tags.length) {

					break;

				}

			}

			// console.log(rm);

			if (rm !== array_Manual_Tags.length) {

				array_Manual_Tags.splice(rm, 1);

			}

		}

		// cl(array_Manual_Tags);

		// array_Manual_Tags.forEach((item, index) => {
		//
		// if(item === '') {
		//
		// array_Manual_Tags.splice(index, 1);
		//
		// }
		//
		// });

		// cl(array_Manual_Tags);

		for (var i = 0; i < array_Manual_Tags.length; i++) {

			if (array_Manual_Tags[i] !== '') {

				html_manual_tags += '<label for="chk_tags_' + (no + 1) + '">';
				html_manual_tags += '<input type="checkbox" value="chk_tags_' + (no + 1) + '" id="chk_tags_' + (no + 1) + '"' + (chk_tags[no + 1] ? 'checked="checked"' : '') + '>';
				html_manual_tags += array_Manual_Tags[i];
				html_manual_tags += '</label>';

				no++;

			}

		}

		html_manual_tags += '</div>';

		$('#manual_tags').html(html_manual_tags);

		var html_final = '<div class="copy">下の業績リストをコピーする</div>';
		var references = '';

		// {

		for (var i = 1; i < records.length; i++) {

			// console.log(i + '=' + Manual_Tags[i]);

			if (typeof Manual_Tags[i] !== 'undefined') {

				var _Manual_Tags = Manual_Tags[i].split('; ');

				// console.log(_Manual_Tags.length + 'length');
				//
				var class_name = 'reference';
				var tags_name = '';

				var a_reference = '';

				for (var j = 0; j < _Manual_Tags.length; j++) {

					// console.log(set_Manual_Tags.indexOf(_Manual_Tags[j]));

					class_name += '_' + (array_Manual_Tags.indexOf(_Manual_Tags[j]) + 1) + '_';
					tags_name += '<div>' + _Manual_Tags[j] + '</div>'

				}

				html_final += '<div class="' + class_name + '">';

				for (var j = 0; j < alignment.length; j++) {

					//					html_final += generateAlignedReference(alignment[j], i);
					a_reference += generateAlignedReference(alignment[j], i);

				}

				html_final += '<span>' + a_reference + '</span>';
				html_final += '<div class="tags">' + tags_name + '</div>';
				html_final += '</div>';

				references += a_reference;



				//		console.log(tags_name);

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

		html_final += '<textarea id="for_copy"></textarea>'

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

			var chk_no = parseInt($(this).attr('id').split('_')[2]);
			chk_tags[chk_no] = $(this).prop('checked');
			// i++;

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
			var show;

			// console.log(c_name);

			//			for (var i = 1; i <= chk_tags.length; i++) {

			switch (chk_and_or) {

				case true:

					show = true;

					for (var i = 1; i <= chk_tags.length; i++) {

						if (chk_tags[i]) {

							if (c_name.indexOf('_' + (i) + '_') == -1) {

								show = false;

							}

						}

					}

					break;

				case false:

					show = false;

					for (var i = 1; i <= chk_tags.length; i++) {

						if (chk_tags[i]) {

							if (c_name.indexOf('_' + (i) + '_') >= 0) {

								show = true;

							}

						}

					}

					break;

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

		var arr_for_copy = [];

		$('#final [class*="show"] span').each(function(index, element) {

			//			console.log($(this).text());
			arr_for_copy.push($(this).text());

		});

		$('#for_copy').val(arr_for_copy.join('\r\n'));

	} else {

		$('#proc_02').hide();

		var html_error = '';

		html_error = '<div class="SM_BIG">';
		html_error += '入力されたデータの中にmanual tagカラムが見当たりません。正しいデータフォーマットで入力されているか、確認してください。';
		html_error += '</div>';

		$('#error').html(html_error);

	}

	// cl(chk_tags);

	// for debug

	// cl('/////////////////////////////////////////////');
	//
	// cl(show, 1);
	// cl(bold, 1);
	// cl(italic, 1);
	// cl(underline, 1);
	// cl(prefix, 1);
	// cl(suffix, 1);
	// cl(delimiter, 1);
	// cl(alignment, 1);
	//
	// cl('/////////////////////////////////////////////');

}

$(function() {

	$(document).on('click', '#chk_underbar', function() {

		chk_underbar = $(this).prop('checked');
		chk_tags = [];

		main();

	});

	$(document).on('click', '#chk_initial', function() {

		chk_initial = $(this).prop('checked');
		chk_tags = [];

		main();

	});

	$(document).on('click', '#chk_yyyymmdd', function() {

		chk_yyyymmdd = $(this).prop('checked');
		chk_tags = [];

		main();

	});

	$(document).on('click', '#chk_and_or', function() {

		chk_and_or = $(this).prop('checked');
		chk_tags = [];

		main();

	});

	$(document).on('click', '#chk_tagall', function() {

		chk_tagall = $(this).prop('checked');

		if (chk_tagall) {

			$('[id^="chk_tags_"]').each(function(index, element) {

				$(this).prop('checked', true);

			});

			for (var i = 0; i < chk_tags.length; i++) {

				chk_tags[i] = true;

			}

			// console.log(chk_tags);

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

	$('[name="template"]').change(function() {

		var opt = parseInt($(this).val());
		// cl(opt);

		switch (opt) {

			case 0:

				show = [empty, false, true, true, true, false, false, false, false, false, false, false, false];
				bold = [empty, false, false, false, false, false, false, false, false, false, false, false, false];
				italic = [empty, false, false, false, false, false, false, false, false, false, false, false, false];
				underline = [empty, false, false, false, false, false, false, false, false, false, false, false, false];
				prefix = [empty, '', '', '', '', '', '', '', '', '', '', ''];
				suffix = [empty, '', '', '', '', '', '', '', '', '', '', ''];
				delimiter = [empty, '', '', '', '', '', '', '', '', '', '', ''];
				alignment = [__tr_01__, __tr_02__, __tr_03__, __tr_04__, __tr_05__, __tr_06__, __tr_07__, __tr_08__, __tr_09__, __tr_10__, __tr_11__, __tr_12__];
				chk_initial = false;
				chk_yyyymmdd = false;

				break;

			case 1:

				show = [empty, false, true, true, true, false, false, false, true, true, true, false, false];
				bold = [empty, false, true, false, true, false, false, false, false, false, false, false, false];
				italic = [empty, false, false, false, true, false, false, false, false, false, false, false, false];
				underline = [empty, false, false, false, false, false, false, false, false, false, false, false, false];
				prefix = [empty, "", "", "", "", "", "", "", "", "(", "", "", ""];
				suffix = [empty, "", "", "", "", "", "", "", "", ")", "", "", ""];
				delimiter = [empty, " ", " ", ", ", " ", " ", " ", " ", " ", ": ", " ", " ", " "];
				alignment = ["tr_02", "tr_03", "tr_01", "tr_04", "tr_05", "tr_06", "tr_07", "tr_10", "tr_09", "tr_08", "tr_11", "tr_12"];
				chk_initial = true;
				chk_yyyymmdd = true;

				break;

		}

		var tbody_html = '';

		var tr_html = [];

		$('[id^="tr_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			// $(this).prop('checked', tr_html[tr_num]);
			tr_html[tr_num] = $(this).prop('outerHTML');

		});

		// cl(tr_html);

		for (var i = 0; i < alignment.length; i++) {

			var tr_num = parseInt(alignment[i].split('_')[1]);
			tbody_html += tr_html[tr_num];

		}

		$('tbody').html(tbody_html);

		$('[id^="show_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			$(this).prop('checked', show[tr_num]);

		});

		$('[id^="bold_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			$(this).prop('checked', bold[tr_num]);

		});

		$('[id^="italic_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			$(this).prop('checked', italic[tr_num]);

		});

		$('[id^="underline_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('id').split('_')[1]);
			$(this).prop('checked', underline[tr_num]);

		});

		$('[name^="prefix_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('name').split('_')[1]);
			$(this).val(prefix[tr_num]);

		});

		$('[name^="suffix_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('name').split('_')[1]);
			$(this).val(suffix[tr_num]);

		});

		$('[name^="delimiter_"]').each(function(index, element) {

			var tr_num = parseInt($(this).attr('name').split('_')[1]);
			$(this).val(delimiter[tr_num]);

		});

		main();

	});

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

			chk_tags[i] = true;

		} else {

			chk_tags[i] = false;

		}

		main();

	});

	// $('#sortable-table tbody').sortable();

	$(document).on('click', '.copy', function() {

		$('#for_copy').select();

		document.execCommand('copy');

		alert('コピーしました。別の文書に貼り付けできます。')

	});

	$('#sortable-table tbody').sortable({
		update: function() {
			alignment = $(this).sortable("toArray");

			// cl('alignment = ' + alignment);

			main();

		}

	});


});

function generateAlignedReference(tr_xx, i) {

	var ret = '';
	var column = '';
	var tr_num = parseInt(tr_xx.split('_')[1]);

	switch (tr_xx) {

		case __tr_01__:

			column = Publication_Year[i];

			break;

		case __tr_02__:

			column = Author[i];

			break;

		case __tr_03__:

			column = Title[i];

			break;

		case __tr_04__:

			column = Publication_Title[i];

			break;

		case __tr_05__:

			column = DOI[i];

			break;

		case __tr_06__:

			column = Url[i];

			break;

		case __tr_07__:

			column = Date[i];

			break;

		case __tr_08__:

			column = Pages[i];

			break;

		case __tr_09__:

			column = Issue[i];

			break;

		case __tr_10__:

			column = Volume[i];

			break;

		case __tr_11__:

			column = Journal_Abbreviation[i];

			break;

		case __tr_12__:

			column = Extra[i];

			break;

	}

	if (show[tr_num]) {

		ret += prefix[tr_num] + column + suffix[tr_num] + delimiter[tr_num];

		if (bold[tr_num]) {

			ret = '<b>' + ret + '</b>';

		}

		if (italic[tr_num]) {

			ret = '<i>' + ret + '</i>';

		}

		if (underline[tr_num]) {

			ret = '<u>' + ret + '</u>';

		}

	}

	return ret;

}

var pos_Manual_Tags = -1;

var pos_Publication_Year = -1;
var pos_Author = -1;
var pos_Title = -1;
var pos_Publication_Title = -1;
var pos_DOI = -1;
var pos_URL = -1;
var pos_Date = -1;
var pos_Pages = -1;
var pos_Issue = -1;
var pos_Volume = -1;
var pos_Journal_Abbreviation = -1;
var pos_Extra = -1;

var show = [];
var bold = [];
var italic = [];
var underline = [];
var prefix = [];
var suffix = [];
var delimiter = [];

var chk_underbar = false;
var chk_initial = false;
var chk_yyyymmdd = false;
var chk_and_or = false;

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

// //////////////////////////////////////////////////

var DEBUG_MODE_01 = false;

// //////////////////////////////////////////////////

function cl(msg, dm) {

	switch (dm) {

		case 1:

			if (DEBUG_MODE_01) {

				cl(msg);

			}

	}

}

function cl(msg) {

	console.log(msg);

}