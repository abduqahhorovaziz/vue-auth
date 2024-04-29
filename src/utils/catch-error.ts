export function catchError(error: any) {
  const data = error.response?.data;
  if(typeof data === 'string') {
    alert(data.message)
  } else{
    alert(data.message.join('\n'))
  }
}