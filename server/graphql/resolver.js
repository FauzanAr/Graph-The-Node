const { v4: uuid } = require('uuid');

const timeHelper = require('../helper/time');

const addArticles = async({ payload }, req) => {
    const createdArticles = {
        id: uuid(),
        title: payload.title,
        description: payload.description,
        createdAt: timeHelper.getTimeToday(),
        updatedAt: timeHelper.getTimeToday(),
    }
}