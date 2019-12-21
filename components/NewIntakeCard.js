import React from 'react'
import { ChevronDown, Minus, Plus, PlusCircle } from 'react-feather'
import { foodGroups } from '../api/meals/data'

class NewIntakeCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foodId: 1,
      foodPortions: 1
    }

    this.updateSelection = this.updateSelection.bind(this)
  }

  updateSelection(event) {
    this.setState({ foodId: event.target.value })
  }

  updateFoodPortion(amount) {
    if (this.state.foodPortions + amount >= 1) {
      this.setState({ foodPortions: this.state.foodPortions + amount })
    }
  }

  render() {
    return (
      <div className={`flex md:flex-col p-4 md:px-6 bg-gray-100 rounded-lg border border-dashed border-gray-400 ${this.props.className}`}>
        <img src={`/images/food/${this.state.foodId}.png`}
             className="w-1/6 md:w-1/2 mr-4 md:mx-auto md:mt-4 md:mb-8" />

        <div className="relative md:mb-4 h-10">
          <select className="select"
                  value={this.state.foodId}
                  onChange={this.updateSelection}>
            {foodGroups.map((foodGroup, index) => {
              return <option key={index} value={foodGroup.id}>{foodGroup.name}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={18} />
          </div>
        </div>

        <div className="flex-shrink-0 h-8 md:mb-6">
          <div className="flex flex-col md:flex-row h-full w-full relative mt-1">
            <button onClick={() => this.updateFoodPortion(-1)}
                    onMouseDown={event => event.preventDefault()}
                    className="px-3 h-full text-gray-700 bg-white rounded-b md:rounded-l-lg cursor-pointer order-3 md:order-1">
              <Minus className="m-auto" size={16} />
            </button>

            <span className="flex items-center justify-center px-4 md:px-0 text-center w-full bg-white text-md text-gray-700 order-2">
              {this.state.foodPortions} {this.state.foodPortions > 1 ? 'portions' : 'portion'}
            </span>

            <button onClick={() => this.updateFoodPortion(1)}
                    onMouseDown={event => event.preventDefault()}
                    className="px-3 h-full text-gray-700 bg-white rounded-t md:rounded-r-lg cursor-pointer order-1 md:order-3">
              <Plus className="m-auto" size={16} />
            </button>
          </div>
        </div>

        <button className="btn btn--primary hidden md:block"
                onClick={() => this.props.addIntake({
                  foodGroupId: this.state.foodId,
                  portions: this.state.foodPortions
                })}>
          Add
        </button>
        <button className="md:hidden"
                onClick={() => this.props.addIntake({
                  foodGroupId: this.state.foodId,
                  portions: this.state.foodPortions
                })}>
          <PlusCircle size={24} />
        </button>
      </div>
    )
  }
}

export default NewIntakeCard
