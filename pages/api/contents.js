// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const contentData = [];
contentData.push({
  articalId: 1,
  level1: 'Article 1 Content 1',
  level2: [{
    title: 'Article 1 - L2 section 1 title',
    summary: 'L2 section title 1 summary with keyword 1 and keyword 2 <b>bold</b>',
    keywords: ['Keyword 1', 'Keyword 2'],
    level3: {
      contents: [{ heading: 'heading 1', content: 'heading 1 contents' }
        , { heading: 'heading 2', content: 'heading 2 contents' }]
    }
  },
  {
    title: 'Article 1 - L2 section 2 title',
    summary: 'L2 section 2 title  summary with keyword 1 and keyword 3 <b>bold</b>',
    keywords: ['Keyword 1', 'Keyword 3'],
    level3: {
      contents: [{ heading: 'heading 1', content: 'heading 1 contents' }
        , { heading: 'heading 2', content: 'heading 2 contents' }]
    }
  }
]
});

contentData.push({
  articalId: 2,
  level1: 'Article 2 Content 2',
  level2: [{
    title: 'Article 2 - L2 section 1 title',
    summary: 'L2 section title 2 summary with keyword 3',
    keywords: ['Keyword 3'],
    level3: {
      contents: [{ heading: 'heading 1', content: 'heading 1 contents' }
        , { heading: 'heading 2a', content: 'heading 2 contents with keyword 3' }]
    }
  }]
});


export default function handler(req, res) {
  res.status(200).json(contentData)
}
