const request = require('supertest');
const app = require('../routers/notes');
require('../db/db');

const taskOne = {
  title: 'SkillStreet',
  content: 'Abhishek Chorotiya',
};

let taskOneID;

describe('Notes API', () => {
  describe('POST /notes', () => {
    test('should create a new note', async () => {
      const response = await request(app)
        .post('/notes')
        .send(taskOne)
        .auth('admin', 'admin');

      taskOneID = response.body._id;

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('title', 'SkillStreet');
      expect(response.body).toHaveProperty('content', 'Abhishek Chorotiya');
    });

    test('should return 400 for empty content field', async () => {
      const response = await request(app)
        .post('/notes/')
        .send({ title: 'SkillStreet', content: '' })
        .auth('admin', 'admin');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });
  });

  describe('GET /notes', () => {
    test('should get all notes', async () => {
      const response = await request(app).get('/notes').auth('admin', 'admin');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });

    test('should return 404 for accessing undefined route', async () => {
      const response = await request(app)
        .get('/undefinedRoute/')
        .auth('admin', 'admin');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Not Found');
    });

    test('should return 500 for internal server error', async () => {
      const response = await request(app)
        .get('/notes/xxxxxxxxxx1a76b4dbff')
        .auth('admin', 'admin');

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('error', 'Internal Server Error');
    });
  });

  describe('GET /notes/:id', () => {
    test('should get a single note by ID', async () => {
      const response = await request(app)
        .get('/notes/' + taskOneID)
        .auth('admin', 'admin');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('content');
    });

    test('should return 404 when note is not found', async () => {
      const response = await request(app)
        .get('/notes/659301eb7705921a76b4dbff')
        .auth('admin', 'admin');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Note not found');
    });
  });

  describe('PUT /notes/:id', () => {
    test('should update a note by ID', async () => {
      const response = await request(app)
        .put('/notes/' + taskOneID)
        .send({ title: 'Updated Test Note', content: 'Updated Test Content' })
        .auth('admin', 'admin');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('title', 'Updated Test Note');
      expect(response.body).toHaveProperty('content', 'Updated Test Content');
    });
  });

  describe('DELETE /notes/:id', () => {
    test('should delete a note by ID', async () => {
      const response = await request(app)
        .delete('/notes/' + taskOneID)
        .auth('admin', 'admin');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty(
        'message',
        'Note deleted successfully'
      );
    });

    test('should return 401 for wrong credentials', async () => {
      const response = await request(app)
        .delete('/notes/' + taskOneID)
        .auth('wrong', 'pass');

      expect(response.status).toBe(401);
    });
  });
});
