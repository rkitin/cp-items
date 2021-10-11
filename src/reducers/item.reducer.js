/* eslint-disable prettier/prettier */
const initialState = {
  id: '',
  name: '',
  assessment_program_id: '',
  item_type_id: '',
  item_type_code: '',
  item_json: {},
  user_id: null,
  attributes_list: [],
  status: null,
  revision_text: '',
  created_date: '',
  variant_type_id: 0,
  description: '',
  rationale: {},
  previous_source: '',
  previous_id: '',
  readable_response: '',
  cluster_scoring: null,
  scoring_needed: null,
  scoring_method_id: null,
  scoring_method_code: '',
  scoring_data: {},
  accessibility_json: [],
  all_responses: [],
  max_score: null,
  workflow_process_id: null,
  workflow_content_id: null,
  workflow_task_id: null,
  workflow_task_status: '',
  workflow_saved_task_id: null,
  workflow_user_id: null
}

const emptyState = {
  status: 'dead'
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ITEM':
      return { ...state, ...action.payload }
    case 'UPDATE_STEM_CONTENT':
      return { ...state, name: { ...action.payload.name } }
    case 'UPDATE_ITEM_JSON':
      return { ...state, item_json: { ...action.payload } }
    case 'CLEAR_ITEM':
      return { ...emptyState }
    default:
      return state
  }
}

export default itemReducer
