import Component from '@glimmer/component';

export default class StarRatingComponent extends Component {
  get maxRating() {
    return this.args.maxRating ?? 5;
  }

  get stars() {
    let starts = [];
    for (let i = 1; i <= this.maxRating; i++) {
      starts.push({
        rating: i,
        full: i <= this.args.rating,
      });
    }
    return starts;
  }
}
