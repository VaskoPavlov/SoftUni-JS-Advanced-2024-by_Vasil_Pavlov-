/**
 * Task: Your employer placed you in charge of an old forum management project. 
 * The client requests new functionality, but the legacy code has high coupling, 
 * so you don’t want to change anything, for fear of breaking everything else. 
 * You know which values need to be accessed and modified, so it’s time to monkey patch!
Write a program to extend a forum post record with voting functionality. 
It needs to have the options to upvote, downvote, and tally the total score 
(positive minus negative votes). Furthermore, to prevent abuse, if a post has more than 50 total votes, 
the numbers must be obfuscated – the stored values remain the same, but the reported amounts of upvotes 
and downvotes have a number added to them. This number is 25% of the greater number of votes 
(positive or negative), rounded up. The actual numbers should not be modified, 
just the reported amounts.

Every post also has a rating, depending on its score. If positive votes are the overwhelming majority 
(>66%), the rating is hot. If there is no majority, but the balance is non-negative 
and the sum of both votes is more than 100, its rating is controversial. If the balance is negative, 
the rating becomes unpopular. If the post has less than 10 total votes, or no other rating is met, 
its rating is new regardless of balance. These calculations are performed on the actual numbers.

Your function will be invoked with the | call(object, arguments) |, so treat it as though it is internal 
for the object. A forum post, to which the function will be attached, has the following structure:
JavaScript
{
  id: <id>,
  author: <author name>,
  content: <text>,
  upvotes: <number>,
  downvotes: <number>
}
The arguments will be one of the following strings:
•	upvote – increase the positive votes by one
•	downvote – increase the negative votes by one
•	score – report positive and negative votes, balance and rating in an array; 
obfuscation rules apply
Input
Input will be passed as arguments to your function through a call() invocation.

Output
Output from the report command should be returned as a result of the function in the form of 
an array of three numbers and a string, as described above.

Examples
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

Explanation
The post begins at 100/100, we add one upvote and one downvote, bringing it to 101/101. 
The reported score is inflated by 25% of the greater value, rounded up (26). 
The balance is 0, and at least one of the numbers is greater than 100, 
so we return an array with the rating 'controversial'.
We downvote 50 times, bringing the score to 101/151, the reported values are inflated by 151*0.25=38 
(rounded up), and since the balance is negative with return an array with rating 'unpopular'.
*/

function solution(arg) {
    let result = [];
    this.upvotes = arg === 'upvote' ? this.upvotes + 1 : this.upvotes;
    let reportUp = this.upvotes;
    this.downvotes = arg === 'downvote' ? this.downvotes + 1 : this.downvotes;
    let reportDown = this.downvotes;
    
        let rating = '';
        let inflatedScore = 0;
        if (reportUp > reportDown) {
            inflatedScore = Math.ceil(reportUp * 0.25);
        } else {
            inflatedScore = Math.ceil(reportDown * 0.25);
        }

        if (this.upvotes > this.downvotes && (this.upvotes - this.downvotes) / 100 > 0.6 && this.upvotes + this.downvotes > 50) {
            reportUp += inflatedScore;
            reportDown += inflatedScore;
            rating = 'hot';
        } else if (this.upvotes >= this.downvotes && this.upvotes + this.downvotes > 100) {
            reportUp += inflatedScore;
            reportDown += inflatedScore;
            rating = 'controversial';
        } else if (this.upvotes < this.downvotes && this.upvotes + this.downvotes > 10) {
            reportUp += inflatedScore;
            reportDown += inflatedScore;
            rating = 'unpopular';
        } else if (this.upvotes + this.downvotes < 10) {
            rating = 'new';
        }

    if (arg === 'score') {
        result.push(reportUp);
        result.push(reportDown);
        const balance = reportUp - reportDown;
        result.push(balance);
        result.push(rating);
        console.log(result);
    }

    reportUp = this.upvotes;
    reportDown = this.downvotes;
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
}

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');

//executing following line 50 times
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score');
