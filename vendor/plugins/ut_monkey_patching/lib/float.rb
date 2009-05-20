class Float

  def roundf(places)
    temp = self.to_s.length
    sprintf("%#{temp}.#{places}f",self).to_f
  end

  def round2
    whole = self.floor
    fraction = self - whole
    if fraction == 0.5
      if (whole % 2) == 0
        whole
      else
        whole+1
      end
    else
      self.round
    end
  end

  def roundf2(places)
    shift = 10**places
    (self * shift).round2 / shift.to_f
  end

end