class DataController < ApplicationController
  require 'net/http'
  require 'json'

  def fetch_data
    url = URI.parse('https://api.example.com/data')
    response = Net::HTTP.get_response(url)
    data = JSON.parse(response.body)
    render json: format_data_for_chartjs(data)
  end

  private

  def format_data_for_chartjs(data)
    # Format the data as needed for Chart.js
    formatted_data = {
      labels: data.map { |d| d['label'] },
      datasets: [
        {
          label: 'Sample Data',
          data: data.map { |d| d['value'] },
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    }
    formatted_data
  end
end
