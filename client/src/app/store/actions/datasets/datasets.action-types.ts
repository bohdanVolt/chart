export enum DatasetActionConstants {
	PARSE_PLAIN_TEXT = 'Dataset: PARSE_PLAIN_TEXT',
	PARSE_FROM_URL = 'Dataset: PARSE_FROM_URL',
	PARSE_FROM_FILE = 'Dataset: PARSE_FROM_FILE',
	PARSE_DATA__COMPLETE = 'Dataset: PARSE_DATA__COMPLETE',
	PARSE_DATA__FAILED = 'Dataset: PARSE_DATA__FAILED',

	CHANGE_CONTENT = 'Dataset data: CHANGE_CONTENT',
	CHANGE_HEADER_TITLE = 'Dataset data: CHANGE_HEADER_TITLE',
	DELETE_COLUMN = 'Dataset data: DELETE_COLUMN',
	DELETE_ROW = 'Dataset data: DELETE_ROW',

	PRELOAD_SAMPLES = 'Dataset samples: PRELOAD_SAMPLES',
	PRELOAD_SAMPLES__COMPLETE = 'Dataset samples: PRELOAD_SAMPLES__COMPLETE',
	PRELOAD_SAMPLES__FAILED = 'Dataset samples: PRELOAD_SAMPLES__FAILED',

	LOAD_SAMPLE = 'Dataset samples: LOAD_SAMPLE',
	LOAD_SAMPLE__COMPLETE = 'Dataset samples: LOAD_SAMPLE__COMPLETE',
	LOAD_SAMPLE__FAILED = 'Dataset samples: LOAD_SAMPLE__FAILED',
	CHANGE_COLUMN_TYPE = 'Dataset data: CHANGE_COLUMN_TYPE',
	ADD_NEW_COLUMN = 'Dataset data: ADD_NEW_COLUMN',
	ADD_NEW_ROW = 'Dataset data: ADD_NEW_ROW'
}
