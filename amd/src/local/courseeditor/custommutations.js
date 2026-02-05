import ajax from 'core/ajax';

export default class {
    /**
     * Mark all discussions in a forum as read via courseformat state action.
     *
     * @param {Object} stateManager Reactive course editor state manager
     * @param {Number} forumid Forum id to process
     */
    async readAllForumDiscussions(stateManager, forumid) {
        const state = stateManager.state;
        const course = state.course;
        let ids = [];
        ids.push(forumid);
        const args = {
            action: 'readAllForumDiscussions',
            courseid: course.id,
            ids: ids,
        };
        let updates = await ajax.call([{
            methodname: 'core_courseformat_update_course',
            args,
        }])[0];
        stateManager.processUpdates(JSON.parse(updates));
    }
}
