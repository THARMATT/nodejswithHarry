const http=require('http');
const port=process.env.PORT||3000;
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>hey this is ninam kakaa</h1> <p>i love you my bchaa</p> ');

})
server.listen(port,()=>{
    console.log('server is listening on port ${port}');
})
// cccccccccvxcccvvcccccccccccccccccccccccccccccvccccccccccccccccccccccccccccccvccccccccccccvxcvxvvcccccvccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccvccvcccccccvccccccccvxcccccccccccccccccccccccccccccccccccccccccccccccccccccvccccccccccccccccccvcccccvcccvcccccccccccccccccccccccccccccccccxvccxccvcccccccccccccccccccccccccccccccccccccccxvccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccvvvcvvvccvvcvcccccccccccccvccccccccccccccccccccccccccccccccccccccccccccccccccvcccccccccccccccccccccccvcllc;kk;cvk;vhhcvvlhkcvlkhvlvvvvlvvlcvhlcvvlkh;khllhklhklkhkhlkhhkhhvlklkhvclkv;hvkhclkvlkvcvvlkhhkhvlkhkvk;clkvhclvkhhh;hhcvlkhcvlkcvl;khkvv;kckv;cv;cv;hkdfSync;ccvcvlckv;vhhlckvhhlckvhclvklclkcvhvlkhkhvhcvhlckvhclvkhclvkhhlkcvlkhklllllclk