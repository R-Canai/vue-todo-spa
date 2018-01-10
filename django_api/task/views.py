from rest_framework import views, response, permissions, status
from .models import Task
from .serializer import TaskSerializer

class TasksView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, task_id = None):
        """ Get Tasks """
        tasks = None
        if (task_id is None):
            # Get all task
            tasks = Task.objects.filter(user=request.user.id)
            serializer = TaskSerializer(tasks, many=True)
            return response.Response(serializer.data)
        else:
            # Get task
            task = Task.objects.get(id=task_id)
            serializer = TaskSerializer(task, many=False)
            return response.Response(serializer.data)

    def post(self, request):
        """ Adding a new task """
        serializer = TaskSerializer(data=request.data)
        if not serializer.is_valid():
            return response.Response(serializer.errors, status=
                status.HTTP_400_BAD_REQUEST)
        data = serializer.data
        task = Task(
            title=data['title'],
            description=data['description'],
            user=request.user,
            done=False,)
        task.save()
        data['id'] = task.pk # return id
        return response.Response(data, status=status.HTTP_201_CREATED)

    def put(self, request, task_id = None):
        """ Update a task """
        serializer = TaskSerializer(data=request.data)
        if not serializer.is_valid():
            return response.Response(serializer.errors, status=
                status.HTTP_400_BAD_REQUEST)
        data = serializer.data
        task = Task.objects.get(id=task_id)
        task.title = data['title']
        task.description = data['description']
        task.done = data['done']
        task.save()
        return response.Response(status=status.HTTP_200_OK)

    def delete(self, request, task_id = None):
        """ Delete a task """
        if task_id is None:
            return response.Response(status=status.HTTP_400_BAD_REQUEST)
        tasks = Task.objects.filter(id=task_id, user=request.user.id)
        tasks.delete()
        data = {'id': int(task_id)}
        return response.Response(data, status=status.HTTP_200_OK)

class TasksToggleView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def patch(self, request, task_id = None):
        """ Toggle done """
        if task_id is None:
            return response.Response(status=status.HTTP_400_BAD_REQUEST)
        task = Task.objects.get(id=task_id, user=request.user.id)
        task.done = not task.done
        task.save()
        data = {'id': task.id, 'done': task.done}
        return response.Response(data, status=status.HTTP_200_OK)
