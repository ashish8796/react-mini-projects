/* eslint-disable array-callback-return */
export function makeStarLandData(stats, repoArr) {
  const langStarArr = [];

  for (let i of stats) {
    langStarArr
      .push(repoArr
        .map(repo => {
          if (i.label === repo.language) {
            return {
              language: repo.language,
              star: repo.star
            }
          }
        })
        .filter(item => item !== undefined)
        .reduce((acc, item) => {
          return {
            language: item.language,
            star: acc.star + item.star
          }
        }, { language: "others", star: 0 })
      )
  }

  return langStarArr;
}