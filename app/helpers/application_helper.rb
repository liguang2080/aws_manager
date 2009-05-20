module ApplicationHelper
  def time_ago_or_time_stamp(from_time, to_time = Time.now, include_seconds = true, detail = false)
    from_time = from_time.to_time if from_time.respond_to?(:to_time)
    to_time = to_time.to_time if to_time.respond_to?(:to_time)
    distance_in_minutes = (((to_time - from_time).abs)/60).round
    distance_in_seconds = ((to_time - from_time).abs).round
    case distance_in_minutes
    when 0..1           then time = (distance_in_seconds < 60) ? "#{distance_in_seconds} 秒前" : '1 分钟前'
    when 2..59          then time = "#{distance_in_minutes} 分钟前"
    when 60..90         then time = "1 小时前"
    when 90..1440       then time = "#{(distance_in_minutes.to_f / 60.0).round} 小时前"
    when 1440..2160     then time = '1 天前' # 1-1.5 days
    when 2160..2880     then time = "#{(distance_in_minutes.to_f / 1440.0).round} 天前" # 1.5-2 days
    else time = from_time.strftime("%a, %d %b %Y")
    end
    return time_stamp(from_time) if (detail && distance_in_minutes > 2880)
    return time
  end


  def display_standard_flashes(message = 'There were some problems with your submission:')
    if flash[:notice]
      flash_to_display, level = flash[:notice], 'notice'
    elsif flash[:warning]
      flash_to_display, level = flash[:warning], 'warning'
    elsif flash[:error]
      level = 'error'
      if flash[:error].instance_of?( ActiveRecord::Errors) || flash[:error].is_a?( Hash)
        flash_to_display = message
        flash_to_display << activerecord_error_list(flash[:error])
      else
        flash_to_display = flash[:error]
      end
    else
      return
    end
    content_tag 'div', flash_to_display, :class => "flash_#{level} flash rounded"
  end
end
